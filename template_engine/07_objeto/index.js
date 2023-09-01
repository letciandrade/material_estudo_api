const express = require('express')
const exphbs = require('express-handlebars')
//utilizando o express
const app = express()
//utilizando o handlebars
//1 paramentro eh a ferramenta que esta trabalhando, e o segundo a confirmacao do negocio ali de cima...
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req,res)=>{
    const items = [
        'item 01', 'item 02', 'item 03'
    ]

    
    return res.render('dashboard', {items})//
})


app.get('/post', (req, res)=>{
    const post = {
        title: "aprendendo node js",
        category: "javaScript",
        body:"este arquivo vai te ajudar a aprender handlebars",
        comments: 8 
    }
    return res.render('blogpost', {post})
})


app.get('/',(req,res)=>{
    const user = {
        name:'carlos',
        surname:'wilton',
        age: 30
    }
    const palavra = 'teste'
    const auth = true
    const approved = true
    return res.render('home', {user:user, palavra, auth, approved})
})

app.listen(8895, ()=>{
    console.log('servidor rodando')
})//nao aconselhavel fazer isso, melhor referenciar uma variavel ;)