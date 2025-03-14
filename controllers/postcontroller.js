function index(req, res) {
    res.json(post)
}
function show(req, res) {
    res.json(post[req.params.id])
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
    res.send(`Cancellazione di un post esistente con id ${req.params.id}`);

}
module.exports = ({ index, show, create, edit, update, destroy });