import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'


import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
/*
import '@ionic/vue/css/float-elements.css';

*/
import '@ionic/vue/css/display.css';

import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';


/* Theme variables */
import './theme/variables.css';

import {
  auth
} from './firebase'


let app

auth.onAuthStateChanged(user => {
  if(!app){
    app = createApp(App);
  app.use(IonicVue);
    app.use(router).use(store);
    router.isReady().then(() => {
        app.mount('#app');
      });
  }

  if (user) {
    // console.log(user)
    const detectoUsuario = {
      email: user.email,
      uid: user.uid
    }
    console.log(user)
    console.log("se esta quedando pegado 1")

    store.dispatch('detectarUsuario', detectoUsuario)
  } else {
      console.log(user)
    console.log("se esta quedando pegado 2")
    store.dispatch('detectarUsuario', user)
  }


});

