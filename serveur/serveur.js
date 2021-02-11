const http = require('http')
const app = require('./app')

const normalisationPort = valeur => {
    const port = parseInt(valeur,10);

    if (isNaN(port)){
        return valeur
    }
    if(port >=0){
        return port;
    }
    return false
};

//normalisation du port
const port = normalisationPort( process.env.PORT || '4000') 
app.set('port', port)

//capteur d'erreur serveur
const errorHandler = error =>{
    if (error.syscall !== 'listen') {
        throw error
    }
    const address= serveur.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port' + port
    switch (error.code){
        case 'EACCES':
            console.error(bind + 'droits utilisateurs supérieurs requis')
            process.exit(1);
            break
        case 'EADDRINUSE':
            console.error(bind + 'est déjà utilisé');
            process.exit(1)
            break;
        default:
            throw error
    }
}

const serveur = http.createServer(app);
serveur.on('error', errorHandler);
serveur.on('listening', ()=>{
    const address = serveur.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port
    console.log('Serveur en écoute sur ' + bind)
})

serveur.listen(port);
