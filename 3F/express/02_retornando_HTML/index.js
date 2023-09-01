const express = require('express')
const port = 3338
const app = express()

const path = require('path')
const basePath = path.join(__dirname, 'templates')



app.get('/',(req, res)=>{
    // res.send('ola, mundo.')
    res.sendFile(`${basePath}/index.html`)//concatenando
    })

    app.get('/contato',(req, res)=>{
        res.sendFile(`${basePath}/contato.html`)
       
        })

    app.listen(port, ()=>{
        console.log('servidor rodando')
        
    })