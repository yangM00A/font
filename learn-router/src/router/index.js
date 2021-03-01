import VueRouter from 'vue-router'
import Vue from 'vue'

/**
 * 一次性全部加载
 */
// import Home from '../components/Home.vue';
// import About from '../components/About.vue';
// import User from '../components/User.vue';


/**
 * 按需加载 ES6写法
 */
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

const Message = () => import('../components/HomeMessage.vue')
const New = () => import('../components/HomeNew.vue')


Vue.use(VueRouter)


const routes = [{
    path: '/',
    redirect: '/Home',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/Home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [{
        path: '/',
        redirect: 'Message',
        meta: {
          title: '消息'
        }
      },
      {
        path: 'Message',
        component: Message,
        meta: {
          title: '消息'
        }
      },
      {
        path: 'New',
        component: New,
        meta: {
          title: '新闻'
        }
      }
    ]
  },
  {
    path: '/About',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/User/:username',
    component: User,
    meta: {
      title: '用户'
    }

  }
]

const router = new VueRouter({
  routes,
  mode: 'history' //url # 取消
})

// 前置钩子（守卫）
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  console.log('to=>', to);
  next()
})


export default router