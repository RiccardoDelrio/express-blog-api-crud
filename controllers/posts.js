function show(req, res) {
    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }

    return res.json(post);
}
