const express = require('express')
const exphbs = require('express-handlebars')
//utilizando o express
const app = express()
//utilizando o handlebars
//1 paramentro eh a ferramenta que esta trabalhando, e o segundo a confirmacao do negocio ali de cima...
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{
    return res.render('home', {layout:false})
})

app.listen(8887)//nao aconselhavel fazer isso, melhor referenciar uma variavel ;)

