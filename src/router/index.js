import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index/index.vue'
import profile from 'components/profile/profile.vue'
import business from 'components/business/business.vue'
import plants from 'components/plants/plants.vue'
import packages from 'components/packages/packages.vue'
import cases from 'components/cases/cases.vue'
import help from 'components/help/help.vue'
import contact from 'components/contact/contact.vue'
import about from 'components/about/about.vue'
import rent from 'components/rent/rent.vue'
import design from 'components/design/design.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/plants',
      name: 'plants',
      component: plants
    },
    {
      path: '/packages',
      name: 'packages',
      component: packages
    },
    {
      path: '/cases',
      name: 'cases',
      component: cases
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/rent',
      name: 'rent',
      component: rent
    },
    {
      path: '/design',
      name: 'design',
      component: design
    }
  ]
})
