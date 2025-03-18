const express = require('express');
const app = express()
const port = 3000


app.use(express.json());

const postsRoutes = require('./routes/posts') //IMPORTO LE ROTTE PER I POST
const handlerError = require('./middleware/handlerError') //')
const error_404 = require('./middleware/error_404')
app.use('/posts', postsRoutes) //AGGIUNGO LE ROTTE AL SERVER
app.use(handlerError)
app.listen(port, () => {

    console.log(`Server attivo http://localhost:${port}`)
})
app.use(error_404) //aggiunta middleware per gestire errori 404