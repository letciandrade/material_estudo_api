const express = require('express')
const app = express();
const port = 8700

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res)=>{
res.sendFile(`${basePath}/index.html`)
})

app.get('/cursos', (req,res)=>{
    res.sendFile(`${basePath}/cursos.html`)
})

app.post('/formContato', (req,res)=>{
    const {nome, curso, contato, senha } = req.body

    console.log(` Seu nome: ${nome} Curso da sua escolha:${curso}  Seu numero de contato: ${contato} Sua senha: ${senha}`)
    res.sendFile(`${basePath}/form.html`)
})


app.listen(port, ()=>{
    console.log('rodando')
})
