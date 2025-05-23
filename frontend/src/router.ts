import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Ai from './pages/Ai.vue';
import Projects from './pages/Projects.vue';
import Guestbook from './pages/Guestbook.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/ai', component: Ai },
  { path: '/projects', component: Projects },
  { path: '/guestbook', component: Guestbook }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
