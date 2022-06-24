const Bootcamp = require('../model/Bootcamp');
const clienterrors = require('../uils/clientErrorHandler ');

exports.gelAllbootcamps = async (req, res, next) => {
  console.log(req.query);
  const str = { title: req.query.title };
  //pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const skip = (page - 1) * limit;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Bootcamp.countDocuments();
  console.log(page);
  const pagination = {};

  if (endIndex < total) {
    pagination.next = { page: page + 1, limit };
  }

  if (startIndex > 0) {
    pagination.prev = { page: page - 1, limit };
  }
  //query.skip(skip).limit(limit) const bootcamps=await query
  try {
    const data = await Bootcamp.find().skip(skip).limit(limit);

    res.status(201).json({ pagination, data });
  } catch (error) {
    next(error);
  }
};

exports.createBootcamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.create(req.body);

    res.status(201).json({ data });
    // res.send(`datalist ${data}`);
  } catch (error) {
    next(error);
  }
};

exports.updateBootcamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) throw new clienterrors('ressource not found', 404);
    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
};

exports.getoneBootcamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.findById(req.params.id);

    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
};

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!data)
      res.status(400).json({ success: false, msg: 'ressource not found' });

    res.status(201).json({ succes: true });
  } catch (error) {
    next(error);
  }
};

// exports.updateBootcamp = async (req, res, next) => {
//   res.status(200).json({ suceess: true });
// };
