const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()
// receber dados do front end - json

app.use(express.urlencoded({
    extendend:true
}))

app.use(express.json())


//configurar template engine ou handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//configurando o baguio para ler os arquivos estaticos
app.use(express.static('public'))

//rota --> local host: 2334
app.get('/',(req,res)=>{
    return res.render('home')
})

app.get('/books', (re,res)=>{
    const sql = `SELECT * FROM books`
    conn.query(sql,(err, data)=>{
        if(err){
            console.log(err)
            return
        }
        const books = data
        
        res.render('books', {books})
    })

    
})

app.post('/books/insertbook', (req,res)=>{
    const {title, nm_paginas} = req.body
    const sql = `INSERT INTO books (title, nm_paginas) VALUES ('${title}', '${nm_paginas}')`

    conn.query(sql,(err)=>{
        if(err){
            console.log(err)
            return
        }
        
        return res.redirect('/')
    })

    
})
app.get('/books/:id',(req,res)=>{
    const id = req.params.id
    // console.log(id)
    const sql = `SELECT * FROM books WHERE id = ${id}`
    conn.query(sql, (err, data)=>{
        if(err){
           console.log(err)
        return
        }
        const book = data[0]
        console.log(book)
        return res.render('book', {book})
    })
    
})

//criar uma conexao com o banco 

const conn = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'aluno_medio',
    password:'@lunoSenai23.',
    database:'banco2'
})

//estabelecer uma conexao com o banco

conn.connect((err)=>{
if(err){
    console.log(err)
    return
}

console.log('MYSQL conectado!')
app.listen(2318, ()=>{
    console.log("servidor indo")
})

})


