const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require ('mongoose')
const path =require('path')
const cors = require('cors')



//Import Routes
const routesProduit = require('./routes/produit')
const routesUser = require('./routes/user')

//Connexion à la DB
const Dev_DBCONNECT = "mongodb+srv://Hummadmin:L@!laHâIlLAh7@devdb.spd36.mongodb.net/DevDB?retryWrites=true&w=majority"
mongoose.connect(Dev_DBCONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true
})    
    .then(()=>console.log('Connexion à la base de donnée réussie'))
    .catch(()=>console.log('Échec de la connexion à la BD'))

// Création de l'app
const app = express();


//Config du setHeader (facultatif si proxy)


// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Fichiers statiques



// Routes



module.exports=app