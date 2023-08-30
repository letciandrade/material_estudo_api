const express = require('express')
const app = express();
const port = 5440

const path = require('path')
const basePath = path.join(__dirname, 'templates')

    app.get('/produto/:id',(req,res)=>{
        const id = req.params.id
        // Fazer a leitura na tabela produto
        // e resgatar um produto dessa tabela
        console.log(`estamos buscando o produto: ${id}`)
        res.sendFile(`${basePath}/produto.html`)


    })


app.get('/',(req , res)=>{
res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`servidor online na porta ${port} 🫥😶‍🌫️`)
})