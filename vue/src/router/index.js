/*

Vue applikation för projektuppgift i kursen DT162G - JavaScriptbaserad webbutveckling
Skapad av: Beatrice Björn
Senast uppdaterad: 2023-02-13

*/

//Importing router and views
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UpdateWeekView from '../views/UpdateWeekView.vue'
import UpdateListView from '../views/UpdateListView.vue'

//Creating routes for views
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
//Route to HomeView
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
//Route to UpdateWeekView requiring an id
    {
      path: '/update-week:id',
      name: 'update-week',
      component: UpdateWeekView
    },
//Route to UpdateListView requiring an id
    {
      path: '/update-list:id',
      name: 'update-list',
      component: UpdateListView
    }
  ]
})
//Exporting router
export default router
