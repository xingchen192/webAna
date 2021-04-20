import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../components/login.vue'

import logon from '../components/logon.vue'
import self_wordCloud from '../components/self_assessment_wordCloud'
import infoPost from '../components/infoPost'
import mapEcharts from '../components/mapEcharts'
import resumePost from '../components/resumePost'
// import test from '../components/test'
import mainMap from '../components/mainMap'
import skill_tree from '../components/skill_tree_wordCloud'
import mainContent from '../components/mainContent'
import androidWordCloud from '../components/androidWordCloud'
import cWordCloud from '../components/cWordCloud'
import javaWordCloud from '../components/javaWordCloud'
import webWordCloud from '../components/webWordCloud'
import pythonWordCloud from '../components/pythonWordCloud'
import networkWordCloud from '../components/networkWordCloud'
import salarys from '../components/salarys'
import stuDistribution from '../components/stuDistribution'
import stuIntention from '../components/stuIntention'
import mainBody from '../components/mainBody'
import assessPro from '../components/assessPro'
import jobUpload from '../components/jobDataUpload'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  }, {
    path: '/logon',
    name: 'logon',
    component: logon,
  },
  {
    path: '/main',
    component: mainBody,
    children: [{
      path: '/',
      name: 'mainContent',
      component: mainContent
    }, {
      path: '/jobUpload',
      name: 'jobUpload',
      component: jobUpload
    },
      {
        path: '/mainMap',
        name: 'mainMap',
        component: mainMap
      },
      {
        path: '/androidWordCloud',
        name: '/androidWordCloud',
        component: androidWordCloud
      },
      {
        path: '/cWordCloud',
        name: '/cWordCloud',
        component: cWordCloud
      },
      {
        path: '/javaWordCloud',
        name: '/javaWordCloud',
        component: javaWordCloud
      },
      {
        path: '/webWordCloud',
        name: '/webWordCloud',
        component: webWordCloud
      },
      {
        path: '/pythonWordCloud',
        name: '/pythonWordCloud',
        component: pythonWordCloud
      },
      {
        path: '/networkWordCloud',
        name: '/networkWordCloud',
        component: networkWordCloud
      },
      {
        path: '/self_wordCloud',
        name: 'self_wordCloud',
        component: self_wordCloud
      }, {
        path: '/distribution',
        name: 'mapEcharts',
        component: mapEcharts
      }, {
        path: '/resumePost',
        name: 'resumePost',
        component: resumePost
      }, {
        path: '/skill_tree',
        name: 'skill_tree',
        component: skill_tree
      }, {
        path: '/safaris',
        name: 'safaris',
        component: salarys
      },
      {
        path: '/infoPost',
        name: 'infoPost',
        component: infoPost
      },
      {
        path: '/assessPro',
        name: 'assessPro',
        component: assessPro
      }, {
        path: '/stuIntention',
        name: 'stuIntention',
        component: stuIntention
      }, {
        path: '/stuDistribution',
        name: 'stuDistribution',
        component: stuDistribution
      }]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
