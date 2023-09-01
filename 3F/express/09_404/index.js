const express = require('express')
const app = express()
const port = 2130

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

//deve ser criado depois da ultima rota, a rota principal, isso eh um middle ware
app.use((req,res,next)=>{
res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, ()=>{
    console.log(`servidor on`)
})