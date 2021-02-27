<template>
  <v-app>
    <v-app-bar
      app
      dense
      color="#fff"
      height="65"
    >
      <v-row no-gutters>
        <v-col cols="4">
          <v-app-bar-nav-icon color="primary" @click="drawer = true"></v-app-bar-nav-icon>
        </v-col>
        <v-col cols="4" align="center">
          <router-link  to="/home">
          <v-img alt="logoHI"
          contain
          class="shrink mr-5"
          src="./assets/logoHI.png"
          transition="scale-transition"
          width="50"
          to="/home"
          ></v-img>
          </router-link>
        </v-col>
        <v-col  cols="4">
          <router-link to="/auth">
            <v-btn  absolute top right  text color="primary"> 
              <v-icon color="primary" size="35">mdi-logout</v-icon>
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>

     <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        <router-link to="/home" class="linkReset">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </router-link>


          <router-link to="/nouveauProduit" class="linkReset">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-plus</v-icon>
              </v-list-item-icon>
                <v-list-item-title >Nouveau produit</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <nav id="nav">
        <router-link to="/home"> Home </router-link>
        <router-link to="/produits" > Produits  </router-link> 
      </nav>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import {mapState} from 'vuex'
// import axios from 'axios'

export default {
  name: 'App',
  data: () => ({
      drawer: false,
      group: null,
      overlay: false
    }),
  // mounted(){
  // this.$store.dispatch('getProduits')
  // },
  //   methods:{
  //   ajoutProduit(){
  //     this.$store.commit('ajoutProduit')
  //   },
  //   // setProduitList(){
  //   //   this.$store.commit('setProduits')
  //   // }
  // },
  // computed:{
  //   ...mapState(['produits'])
  //   // produits:{
  //   //   get:()=>{
  //   //     return this.$store.getters['getProduits']
  //   //   }
  //   // }
  // },
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

#nav{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.8em;

  a{
    font-weight: bold;
    text-decoration: none;
    color:#2c3e50be;
    font-size: 1.2em;

    &.router-link-exact-active{
      color: #2780da;
      text-decoration: underline;
    }
  }
 }

.linkReset{
  text-decoration: none;
}
</style>