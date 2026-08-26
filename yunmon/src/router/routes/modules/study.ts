import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:layout-dashboard',
      order: -1,
      title: $t('study.title'),
    },
    name: 'Study',
    path: '/study',
    redirect: '/study/',
    children: [
      {
        name: 'Demo1',
        path: 'demo1',
        component: () => import('#/views/study/demo1.vue'),
        meta: {
          affixTab: true,
          icon: 'lucide:area-chart',
          title: $t('study.demo1.title'),
          keepAlive: true,
        },
      },
      {
        name: 'Demo2',
        path: 'demo2',
        component: () => import('#/views/study/demo2.vue'),
        meta: {
          icon: 'carbon:workspace',
          title: $t('study.demo2.title'),
        },
      },

      {
        name: 'Demo3',
        path: 'demo3',
        component: () => import('#/views/study/demo3.vue'),
        meta: {
          icon: 'carbon:workspace',
          title: $t('study.demo3.title'),
        },
      },

      {
        name: 'Demo4',
        path: 'demo4',
        component: () => import('#/views/study/demo4.vue'),
        meta: {
          icon: 'carbon:workspace',
          title: $t('study.demo4.title'),
        },
      },
    ],
  },
];

export default routes;
