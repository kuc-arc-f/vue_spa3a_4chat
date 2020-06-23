import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'

import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: " ",
  authDomain: " ",
  databaseURL: " ",
  projectId: " ",
}
firebase.initializeApp(config)


//
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
