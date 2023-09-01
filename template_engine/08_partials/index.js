const express = require('express')
const exphbs = require('express-handlebars')


const app = express()


const hbs = exphbs.create({
    partialsDir:['views/partials']
})
app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars')


app.get('/dashboard',(req,res)=>{
    const items =['item 01','item 02','item 03']
    return res.render('dashboard',{items})
})
app.get('/blog',(req,res)=>{
    const post = [
        {title:'Aprendendo NODEjs',
        category:'JaveScript',
        body:'Este arquivo vai de ajudar a aprender Handlebars',
        comments:8
    },
    {title:'Aprendendo NODEjs',
    category:'JaveScript',
    body:'Este arquivo vai de ajudar a aprender Handlebars',
    comments:8
},
    {title:'Aprendendo NODEjs',
    category:'JaveScript',
    body:'Este arquivo vai de ajudar a aprender Handlebars',
    comments:8
}
    ]
    return res.render('blog',{post})
})




app.get('/post', (request,response)=>{
    const post ={
        title:'Aprendendo NODEjs',
        category:'JaveScript',
        body:'Este arquivo vai de ajudar a aprender Handlebars',
        comments:8
    }
    return res.render('blogpost',{post})
})
app.get('/',(req,res)=>{
   
    const user = {
        name:'carlos',
        surname:'wiltpom',
        age:30
    }
    const palavra = "test"
    const auth = true
    const approved = false
    return res.render('home',{user:user,palavra,auth,approved})
})




app.listen(8805, ()=>{
    console.log('servidor rodando')
})//nao aconselhavel fazer isso, melhor referenciar uma variavel ;)