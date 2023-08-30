const express = require('express')
const app = express()
const port = 3334

// esse metodo get recebe dois parametros, o primeiro eh a rota(caminho) e o outro eh uma funcao anonima de req e res.
app.get('/',(req, res)=>{
res.send('ola, mundo.')
})

app.get('/clientes',(req, res)=>{
    res.send('pagina do cliente muahahaha')
    })


app.listen(port, ()=>{
    console.log('servidor rodando')
})

// nao sobe para o github a pasta node modulos ali, entt vc tem que apagar ela, nn se preocupe da
// pra instalar ela depois fazendo node i ou npm i, nn lembro muito bem mais eh isso ksksk
