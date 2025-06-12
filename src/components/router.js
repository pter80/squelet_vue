import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'
import HelloWorld from './HelloWorld.vue'
import Welcome from './TheWelcome.vue'
import WelcomeItem from './WelcomeItem.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/hello', component: HelloWorld },
  { path: '/welcome', component: Welcome },
  { path: '/welcome_item',component: WelcomeItem }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router