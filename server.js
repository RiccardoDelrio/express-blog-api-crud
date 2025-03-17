const express = require('express');
const app = express()
const port = 3000

app.listen(port, () => {

    console.log(`Server attivo http://localhost:${port}`)
})
app.use(express.json());

const postsRoutes = require('./routes/posts') //IMPORTO LE ROTTE PER I POST
app.use('/posts', postsRoutes) //AGGIUNGO LE ROTTE AL SERVER