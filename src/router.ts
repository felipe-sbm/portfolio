import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./pages/Home.vue') },
  { path: '/about', component: () => import('./pages/About.vue') },
  { path: '/ai', component: () => import('./pages/Ai.vue') },
  { path: '/projects', component: () => import('./pages/Projects.vue') },
  { path: '/projects/:slug', component: () => import('./pages/ProjectDetail.vue') },
  { path: '/guestbook', component: () => import('./pages/Guestbook.vue') },
  { path: '/visualizer', component: () => import('./pages/Visualizer.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
