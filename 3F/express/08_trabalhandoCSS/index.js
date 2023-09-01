const express = require('express')
const app = express()
const port = 5001

const path = require('path')
const basePath = path.join(__dirname, 'templates')

// arquivos estaticos -- css, img, videos, js

//middleware
app.use(express.static('public'))

app.get('/',(req,res)=>{
res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`servidor on ${port}`)
})

