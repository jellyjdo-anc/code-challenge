import { createRouter, createWebHistory } from 'vue-router'
import MusicPage from '../views/MusicPage.vue'
import ZooPage from '../views/ZooPage.vue'

const routes = [
  { path: '/', name: 'Music', component: MusicPage },
  { path: '/zoo', name: 'Zoo', component: ZooPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
