import Vue from 'vue'

import router from '@/router'
import store from '@/store'

import App from '@/components/App'
import Footer from '@/components/Footer'

// Create the Vue application instance.
const app = new Vue({ router, store, render: h => h(App) })
const footer = new Vue({ router, store, render: h => h(Footer) })

// Mount the application to the element on the page with id="app".
app.$mount('#app')
footer.$mount('#footer')
