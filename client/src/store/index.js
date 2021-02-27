import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import moduleProduit from './modules/produit'

Vue.use(Vuex)
export default new Vuex.Store({
  // initialisation des données
  state: {
    produits:[]
  },
  // les getters sont utilisés pour récupérer tout ou parti des variables du store ou en calculer
  getters:{ 
    getProduits: state => state.produits 
  },
  // sles mutations sont utilisées pour mettre à jour les données
  mutations: {
    setProduits(state,listeProduits){
      state.produits = listeProduits 
    },
    // ajoutProduit(state, nouveauProduit){
    //   state.produits += nouveauProduit
    // }
  },
  actions: {
    getProduits: ({commit})=> {axios.get('http://localhost:4000/api/produits')
    .then((response)=>{commit('setProduits', response.data)})
    }
  },
  modules: {
    // moduleProduit
  }
})
