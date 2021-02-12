const mongoose = require('mongoose')
const ProduitSchema =require('../models/produit')

const Produit = mongoose.model('Produit', ProduitSchema)

exports.creerProduit=(req,res,next)=>{
    delete req.body._id                      // ici on supprime l'id généré automatiquement
    const produit = new Produit({
        ...req.body
    })
    produit.save()
    .then(()=>res.status(200).json({message: `Objet créé: ${produit}`}))
}

exports.getProduits=(req,res,next)=>{
    Produit.find({},(err,produit)=>{
        if(err){
            res.send(err)
        }
        res.json(produit)
    })
}