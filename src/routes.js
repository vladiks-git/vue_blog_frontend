import VueRouter from "vue-router";
import MainContent from './components/main-content'
import AboutUs from './components/about-us'
import AddPost from './components/add-post'
import Registration from './components/registration'
import Login from './components/login'

const router =  new VueRouter({
    routes: [
        {path: '', component: MainContent},
        {path: '/about', component: AboutUs},
        {path: '/add', component: AddPost, meta: {requireAuth: true}},
        {path: '/registration', component: Registration},
        {path: '/login', component: Login},
        {path: '*', redirect: '/'}
    ],
    mode: 'history',
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requireAuth)){
        if(JSON.parse(localStorage.getItem('jwt')) == null){
            next({
                path: '/login'
            })
        }
        else {
            next()
        }
    }else {
        next()
    }
})

export default router