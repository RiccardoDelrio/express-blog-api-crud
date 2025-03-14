const express = require('express');
const router = express.Router();
const post = require('../data/posts');

router.get('/', index)
router.get('/:id', (req, res) => {
    /* res.send(`Post con id ${req.params.id}`) */
    res.json(post[req.params.id])
})
router.post('/', (req, res) => {
    // Aggiunta di un nuovo post
    res.send('Aggiunta di un nuovo post');
})
router.put('/:id', (req, res) => {
    // Modifica di un post esistente
    res.send(`Modifica di un post esistente con id ${req.params.id}`);
})
router.patch('/:id', (req, res) => {
    // Aggiornamento di una parte del post esistente
    res.send(`Aggiornamento di una parte del post esistente con id ${req.params.id}`);
})


router.delete('/:id', (req, res) => {
    // Cancellazione di un post esistente
    res.send(`Cancellazione di un post esistente con id ${req.params.id}`);
})
module.exports = router
