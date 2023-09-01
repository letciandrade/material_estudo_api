const express = require('express')
const app = express()
const port = 6700

app.get('/',(req, res)=>{
    res.send('ola, mundo!')
    })
    
    
    app.listen(port, ()=>{
        console.log('servidor rodando na porta'+port)
    })