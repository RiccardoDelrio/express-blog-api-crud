const posts = require('../data/posts');

function index(req, res) {
    const tag = req.query.tags;

    if (tag) {
        const filteredPosts = posts.filter(post => post.tags.includes(tag));
        return res.json(filteredPosts);
    }
    res.json(posts);
    /* http://localhost:3000/posts/?tags=Antipasti
    L'eventuale chiamata da fare */
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
    console.log(req.body);
    posts.push(req.body);
    console.log(posts);
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