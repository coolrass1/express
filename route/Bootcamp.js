const express = require('express');
const router = express.Router();
const {
  gelAllbootcamps,
  createBootcamp,
  updateBootcamp,
  getoneBootcamp,
  deleteBootcamp,
} = require('../controller/Bootcamp');
router.get('/', gelAllbootcamps);
router.get('/:id', getoneBootcamp);
router.post('/', createBootcamp);
router.put('/:id', updateBootcamp);
router.delete('/:id', deleteBootcamp);

module.exports = router;
