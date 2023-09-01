const express = require('express')
const app = express()
const PORT = 3032

const path = require('path')
const basePath = path.join(__dirname, 'templates')

const checkAuth = (req, res, next)=>{
const auth = req.authStatus = true

if(auth){
console.log('usuario logado, pode continuar!')
next()
}
else{
    console.log(`não,esta logado, faça login!`)
    next()
}

}

//utilizar middleware
app.use(checkAuth)

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(PORT)