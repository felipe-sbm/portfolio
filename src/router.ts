import { watch } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { consumeNextNavigationScrollIntent } from './services/NavigationScrollIntent';
import { useI18n } from './i18n';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home.vue'),
    meta: {
      titleKey: 'routes.home.title',
      descriptionKey: 'routes.home.description',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./pages/About.vue'),
    meta: {
      titleKey: 'routes.about.title',
      descriptionKey: 'routes.about.description',
    },
  },
  {
    path: '/ai',
    name: 'ai',
    component: () => import('./pages/Ai.vue'),
    meta: {
      titleKey: 'routes.ai.title',
      descriptionKey: 'routes.ai.description',
    },
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('./pages/Projects.vue'),
    meta: {
      titleKey: 'routes.projects.title',
      descriptionKey: 'routes.projects.description',
    },
  },
  {
    path: '/projects/:slug',
    name: 'project-detail',
    component: () => import('./pages/ProjectDetail.vue'),
    meta: {
      titleKey: 'routes.projectDetail.title',
      descriptionKey: 'routes.projectDetail.description',
    },
  },
  {
    path: '/guestbook',
    name: 'guestbook',
    component: () => import('./pages/Guestbook.vue'),
    meta: {
      titleKey: 'routes.guestbook.title',
      descriptionKey: 'routes.guestbook.description',
    },
  },
  {
    path: '/:catchAll(.*)*',
    name: 'notfound',
    component: () => import('./pages/NotFound.vue'),
    meta: {
      titleKey: 'routes.notfound.title',
      descriptionKey: 'routes.notfound.description',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition;

    const intent = consumeNextNavigationScrollIntent();
    if (intent === 'header-top') {
      return { left: 0, top: 0 };
    }

    if (intent === 'footer-bottom') {
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resolve({
              left: 0,
              top: document.documentElement.scrollHeight,
            });
          });
        });
      });
    }

    return undefined;
  },
});

const { t, readonlyLocale } = useI18n();

function applyPageMeta(titleKey?: string, descriptionKey?: string) {
  const defaultTitle = t('common.appTitle');
  const title = titleKey ? t(titleKey) : defaultTitle;
  document.title = typeof title === 'string' ? title : String(defaultTitle);

  const defaultDescription = t('routes.home.description');
  const description = descriptionKey ? t(descriptionKey) : defaultDescription;

  let metaTag = document.querySelector('meta[name="description"]');
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute('name', 'description');
    document.head.appendChild(metaTag);
  }

  metaTag.setAttribute(
    'content',
    typeof description === 'string' ? description : String(defaultDescription),
  );
}

router.afterEach((to) => {
  applyPageMeta(to.meta.titleKey, to.meta.descriptionKey);
});

watch(readonlyLocale, () => {
  const currentRoute = router.currentRoute.value;
  applyPageMeta(currentRoute.meta.titleKey, currentRoute.meta.descriptionKey);
});

export default router;
