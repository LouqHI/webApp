import axios from 'axios'
const moduleProduit={
    state:{
        produits:[]
    },
    mutations:{
        produitList(state, produits){
            state.produits = produits
        }
    },
    actions:{
        async allProduits({commit}){
            const response = await axios.get('http://localhost:4000/api/produit')
            commit('produitList', response.data)
            .then(console.log(response.data))
        }
    },
    getters:{
        getAllProduits : state => state.produits
    }
}

export default moduleProduit