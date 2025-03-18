const posts = require('../data/posts');

function index(req, res) {
    /*     app.ciao() */  //Se si vuole triggerare un errore 500 */ 
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
    const newPost = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    }
    posts.push(newPost);
    console.log(posts);
}
function edit(req, res) {
    res.send(`Modifica di un post esistente con id ${req.params.id}`);

}
function update(req, res) {

    const postSlug = req.params.slug;
    const post = posts.find(post => post.slug === postSlug);
    if (!post) {
        return res.status(404).json({
            error: 404,
            message: "post not found"
        });
    }
    post.title = req.body.title
    post.slug = req.body.slug
    post.content = req.body.content
    post.image = req.body.image
    post.tags = req.body.tags
    res.json(post);
    console.log(posts);
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