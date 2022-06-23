const express= require('express');
const app= express()
const port= 3000
const routes= require('./routes/index');
const path = require('path')

const session = require('express-session')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
    secret: 'hacktiv123',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        sameSite : true
    }
}))


app.use(routes)


app.listen(port,()=>{
    console.log(`connected to port ${port}`)
})