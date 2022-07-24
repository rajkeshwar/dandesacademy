import { createApp } from 'vue';
import App from './App.vue'
import PrimeVue from 'primevue/config';
import './assets/tailwind.css'

import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import 'primevue/resources/primevue.min.css';                 //core css
import 'primeicons/primeicons.css'; 
import './assets/styles.scss'; 
import { router } from './router';

createApp(App)
  .use(PrimeVue)
  .use(router)
  .mount('#app')
