
const express= require('express')
const router = express.Router()

const ctrl_produit = require('../controllers/produit')


router.post('/',ctrl_produit.creerProduit)
router.get('/', ctrl_produit.getProduits)
// router.put('/:id', ctrl_produit.updateProduit)
// router.delete('/:id',ctrl_produit.deleteProduit)
// router.get('/:id',ctrl_produit.getProduitById)

module.exports=router