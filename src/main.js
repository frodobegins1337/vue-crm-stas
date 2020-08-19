import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import dateFilter from './filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.use(Vuelidate)
Vue.use(messagePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyA1u9X7sHjPsIWA8DEprxUqurOrYZnStC8",
  authDomain: "vue-crm-stas.firebaseapp.com",
  databaseURL: "https://vue-crm-stas.firebaseio.com",
  projectId: "vue-crm-stas",
  storageBucket: "vue-crm-stas.appspot.com",
  messagingSenderId: "797789373674",
  appId: "1:797789373674:web:6ca0ebf750151ae165c393",
  measurementId: "G-06ESYTN1F0"
});
let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


