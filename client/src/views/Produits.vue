<template>
    <v-container grid-list-xs>
        <v-col> 
            <v-row sm="3" md="5">
                <router-link to="/nouveauProduit" class="linkReset  ml-10" >
                    <v-btn color="primary" > 
                        <v-icon class="mr-2">mdi-plus-circle</v-icon>
                        Nouveau Produit
                    </v-btn>
                </router-link>
            </v-row>
        <v-row xs="12" sm="12" md="6" lg="4" xl="2">
            <v-col v-for="produit in produits" v-bind:key="produit.nom">
                <div>
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card
                                class="mx-auto"
                                max-width="344"
                                elevation="7"
                            >
                                <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>
                                <v-card-text>
                                <h2 class="title primary--text">
                                    {{produit.nom}}
                                </h2>
                                    Catégorie: {{produit.categorie}}
                                </v-card-text>

                                <v-card-title primary-title>
                                        Bagnolet:{{produit.qtBG}}
                                    <br>
                                        Blanc-mesnil:{{produit.qtBM}}
                                </v-card-title>

                                <v-fade-transition>
                                <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="#036358"
                                >
                                    <v-btn>Voir produit</v-btn>
                                </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                        </v-hover>
                </div>
            </v-col>
        </v-row>
        </v-col>
    </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Produits',
    data: () => ({
      overlay: false,
    }),
    mounted(){
        this.$store.dispatch('getProduits')
    },
    computed:{
        ...mapState(['produits'])
    }
}
</script>