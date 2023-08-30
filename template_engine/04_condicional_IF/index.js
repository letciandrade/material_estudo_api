const express = require('express')
const exphbs = require('express-handlebars')
//utilizando o express
const app = express()
//utilizando o handlebars
//1 paramentro eh a ferramenta que esta trabalhando, e o segundo a confirmacao do negocio ali de cima...
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req,res)=>{
    return res.render('dashboard')
})

app.get('/',(req,res)=>{
    const user = {
        name:'carlos',
        surname:'wilton',
        age: 30
    }
    const palavra = 'teste'
    const auth = true
    return res.render('home', {user:user, palavra, auth})
})

app.listen(8882, ()=>{
    console.log('servidor rodando')
})//nao aconselhavel fazer isso, melhor referenciar uma variavel ;)