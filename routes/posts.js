const express = require('express');
const router = express.Router();
const post = require('../data/posts');
router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.put('/:id', edit)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router
