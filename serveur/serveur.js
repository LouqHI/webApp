const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require ('mongoose')
const path =require('path')
const cors = require('cors')

//Import Routes
const routesProduit = require('./routes/produit')
const routesUser = require('./routes/user')

//Connexion à la DB
//Ne pas oublier la variable d'environnement MONGO_URI
const MongoUri= "mongodb+srv://Hummadmin:L@!laHâIlLAh7@devdb.spd36.mongodb.net/DevDB?retryWrites=true&w=majority"
mongoose.connect(MongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true,
})    
    .then(()=>console.log('Connexion à la base de donnée réussie'))
    .catch(()=>console.log('Échec de la connexion à la BD'))

// Création de l'app
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/dist'))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
    })
}
const app = express()
app.use(cors())
const port = process.env.PORT || 4000;
app.listen(port, console.log("Serveur en écoute sur: "+ port))


//Config du setHeader (facultatif si proxy)


// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Fichiers statiques
// app.use('/images', express.static(path.join(__dirname, 'images'))) /** on utilisera cette ligne lorsque l'on va permettre le CRUD produit users */


// Routes
app.get('/', (req,res)=>{
    res.send("Salut")
})
app.use('/api/produits', routesProduit)
