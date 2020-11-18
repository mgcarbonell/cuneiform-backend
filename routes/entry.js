// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.entry.index)
router.get('/:id', ctrl.entry.show)
router.post('/new', ctrl.entry.new)
router.put('/:id', ctrl.entry.update)
router.delete('/:id', ctrl.entry.destroy)

// exports
module.exports = router;