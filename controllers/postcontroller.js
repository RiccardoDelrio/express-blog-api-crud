const posts = require('../data/posts');

function index(req, res) {

    res.json(posts);
}
function show(req, res) {
    console.log(req.params);

    const postSlug = req.params.slug;
    const post = posts.find(post => post.slug === postSlug);
    if (!post) {
        return res.status(404).json({
            error: 404,
            message: "post not found"
        });
    }

    res.json(post);
}


function create(req, res) {
    res.send('Aggiunta di un nuovo post');
}
function edit(req, res) {
    res.send(`Modifica di un post esistente con id ${req.params.id}`);

}
function update(req, res) {
    res.send(`Aggiornamento di una parte del post esistente con id ${req.params.id}`);

}
function destroy(req, res) {
    const postSlug = req.params.slug;
    const post = posts.find(post => post.slug === postSlug);
    if (!post) {
        return res.status(404).json({
            error: 404,
            message: "post not found"
        });
    }
    posts.splice(posts.indexOf(post), 1);
    res.json(posts);

}

module.exports = ({ index, show, create, edit, update, destroy });