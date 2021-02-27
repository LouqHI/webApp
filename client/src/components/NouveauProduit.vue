<template>
    <v-container elevation-10 class="mt-5" >
        <v-form action="/api/produits/" method="post">
            <v-col sm="12" md="8" lg="4" class="mx-auto mt-3 py-5" >
                <v-row sm="12" md="3" lg="3">
                    <p class="headline  grey--text text--darken-3 text-center ">Nouveau produit</p>
                </v-row>
                <v-row  sm="12" md="3" lg="3"> 
                    <v-text-field
                        name="nom"
                        label="nom"
                        id="id"
                        color="primary"
                        sm="12" md="3" lg="3"
                    ></v-text-field>
                </v-row>
                 <v-row sm="12" md="3" lg="3"> 
                    <v-select
                    name="categorie"
                    :items="categories"
                 
                    label="catégorie"
                    id="categorie"
                    > 
                        
                    </v-select>
                </v-row>
                 <!-- <v-row sm="12" md="3" lg="3"> 
                    <v-file-input
                        name="img"
                        id="img"
                        accept="image/*"
                        label="image produit"
                        disabled
                    ></v-file-input>
                </v-row> -->
                 <v-row sm="12" md="3" lg="3"> 
                    <v-text-field
                    name="qtBG"
                    id="qtBG"
                    label="quantité Bagnolet"
                    type="number"
                    >
                    </v-text-field>
                </v-row>
                <v-row sm="12" md="3" lg="3"> 
                    <v-text-field
                    name="qtBM"
                    id="qtBM"
                    label="quantité Blanc-mesnil"
                    type="number"
                    >
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-btn type="submit" color="primary" class="mx-auto"> Valider</v-btn>
                </v-row>
            </v-col>
        </v-form>    
    </v-container>

</template>

<script>
export default {
    name:'NouveauProduit',
    data(){
        return {
            categories:['Féculent','Légume','Viande','Boisson','Fruit','Gâteau','Hygiène','Utilitaire',]
        }
    }
}
</script>

<style>

</style>