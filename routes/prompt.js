// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.prompt.index)
router.get('/:id', ctrl.prompt.show)
// router.post('/create', ctrl.prompt.create) saving for future implementation
// router.put('/:id', ctrl.prompt.update) saving for future implementation
// router.delete('/:id', ctrl.prompt.destroy) saving for future implementation

// exports
module.exports = router;