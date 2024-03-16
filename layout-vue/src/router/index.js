import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import DetailsView from '../views/DetailsView.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectDetailsView from '@/views/ProjectDetailsView.vue'
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView
  },
  {
    path: '/details',
    name: 'Details',
    component: DetailsView
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectView
  },
  {
    path: '/projectDetails',
    name: 'ProjectDetails',
    component: ProjectDetailsView
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
