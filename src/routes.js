import VueRouter from "vue-router";
import MainContent from './components/main-content'
import AboutUs from './components/about-us'
import AddPost from './components/add-post'
import Registration from './components/registration'

export default new VueRouter({
    routes: [
        {path: '', component: MainContent},
        {path: '/about', component: AboutUs},
        {path: '/add', component: AddPost},
        {path: '/registration', component: Registration},

        {path: '*', redirect: '/'}
    ],
    mode: 'history'
})