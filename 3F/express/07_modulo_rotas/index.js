const express = require('express')
const app = express();
const port = 2344

const path = require('path')
const basePath = path.join(__dirname, 'templates')

const users = require('./users')

//middleware para json
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

//rotas de usuario
app.use('/users', users)



app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`servidor on na porta ${port}`)
})
