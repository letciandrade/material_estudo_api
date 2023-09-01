const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()

//configurar template engine ou handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//configurando o baguio para ler os arquivos estaticos
app.use(express.static('public'))

//rota --> local host: 2334
app.get('/',(req,res)=>{
    return res.render('home')
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
app.listen(2334, ()=>{
    console.log("servidor indo")
})

})


