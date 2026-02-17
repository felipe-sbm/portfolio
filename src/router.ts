import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home.vue'),
    meta: {
      title: 'Home | Felipe SBM',
      description: 'Página inicial de Felipe SBM.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./pages/About.vue'),
    meta: {
      title: 'About | Felipe SBM',
      description: 'Saiba mais sobre Felipe SBM.'
    }
  },
  {
    path: '/ai',
    name: 'ai',
    component: () => import('./pages/Ai.vue'),
    meta: {
      title: 'AI | Felipe SBM',
      description: 'Projetos e pesquisas em Inteligência Artificial.'
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('./pages/Projects.vue'),
    meta: {
      title: 'Projects | Felipe SBM',
      description: 'Projetos desenvolvidos por Felipe SBM.'
    }
  },
  {
    path: '/guestbook',
    name: 'guestbook',
    component: () => import('./pages/Guestbook.vue'),
    meta: {
      title: 'Guestbook | Felipe SBM',
      description: 'Deixe uma mensagem para Felipe SBM.'
    }
  },
  {
    path: '/:catchAll(.*)*',
    name: 'notfound',
    component: () => import('./pages/NotFound.vue'),
    meta: {
      title: '404 | Felipe SBM',
      description: 'Página não encontrada.'
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  const defaultTitle = 'felipe sbm :)';
  document.title = to.meta.title || defaultTitle;
  const defaultDescription = 'Portfólio de Felipe SBM.';
  const description = to.meta.description || defaultDescription;

  let metaTag = document.querySelector('meta[name="description"]');
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute('name', 'description');
    document.head.appendChild(metaTag);
  }
  metaTag.setAttribute('content', description);
});

export default router;
