import { createRouter, createWebHistory } from 'vue-router'
import { useBreadCrumbStore } from '@/stores/useBreadcrumbStore'
import UserFormPage from '@/pages/UserFormPage.vue'
import ProfilesPage from '@/pages/ProfilesPage.vue'
import ProfileDetailsPage from '@/pages/ProfileDetailsPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import { useFooterStore } from '@/stores/useFooterStore'
import { useUserStore } from '@/stores/useUserStore'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'userform',
      component: UserFormPage,
      meta: {
        breadcrumb: [
          { value: 'Profile', route: '/profiles' },
          { value: 'Profile Details', route: '#' },
        ],
        title: 'User Form',
        hasSubmit: true,
        hasInfo: true,
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
      meta: {
        breadcrumb: [{ value: 'Dashboard', route: '#' }],
        title: 'Dashboard',
      },
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: ProfilesPage,
      meta: {
        breadcrumb: [{ value: 'Profiles', route: '#' }],
        title: 'Profiles',
      },
    },
    {
      path: '/profile-details',
      name: 'profile-details',
      component: ProfileDetailsPage,
      meta: {
        breadcrumb: [
          { value: 'Profiles', route: '/profiles' },
          { value: 'Profile Details', route: '#' },
        ],
        title: 'Profile Details',
      },
    },
  ],
})

router.afterEach((to, from, failure) => {
  if (!failure) {
    const breadcrumbStore = useBreadCrumbStore()
    const footerStore = useFooterStore()
    const breadcrumbs = Array.isArray(to.meta.breadcrumb)
      ? to.meta.breadcrumb
      : []
    breadcrumbStore.setBreadCrumbs(breadcrumbs)
    const userStore = useUserStore()
    userStore.setHasInfo(to.meta?.hasInfo as unknown as boolean)
    footerStore.toggleHasSubmit(to.meta?.hasSubmit as unknown as boolean)
    document.title = to.meta.title as unknown as string
  }
})
export default router
