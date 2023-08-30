const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../templates')

//middleware para json
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())


//buscar a pagina de formulario de usuario
router.get('/add', (req,res)=>{
    res.sendFile(`${basePath}/useForm.html`)
    })
    //cadastrar usuario
    router.post('/users/save', (req, res)=>{
        const {name, age} = req.body
        console.log(`o nome ${name} e idade ${age}`)
        res.sendFile(`${basePath}/useForm.html`)
    })


module.exports = router