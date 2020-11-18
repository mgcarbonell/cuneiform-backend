// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.comment.index)
router.post('/new', ctrl.comment.new)
router.put('/:id', ctrl.comment.update)
router.delete('/:id', ctrl.comment.destroy)

// exports
module.exports = router;