module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack:{
    devServer:{
      proxy:{
        '/api/*':{
          target: 'http://localhost:4000'
        }
      }
    }
  }
}
