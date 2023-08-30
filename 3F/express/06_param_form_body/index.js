const express = require('express')
const app = express()
const port = 3241

const path = require('path')
const basePath = path.join(__dirname, 'templates')


//montar um ob. json
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json)

//rota para mostrar o formulario
app.get('/user/add', (req,res)=>{
    res.sendFile(`${basePath}/userForm.html`)
})

//rota para cadastradamento de info. do formulario
app.post('/user/save', (req,res)=>{
    const {name, age} = req.body

console.log(`nome${name} e idade: ${age}`)
res.sendFile(`${basePath}/userForm.html`)
})



app.listen(port, ()=>{
    console.log(`servidor on ${port}😶‍🌫️`)
})