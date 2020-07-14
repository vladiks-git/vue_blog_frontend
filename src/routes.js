import VueRouter from "vue-router";
import MainContent from './components/main-content'
import AboutUs from './components/about-us'

export default new VueRouter({
    routes: [
        {path: '', component: MainContent},
        {path: '/about', component: AboutUs},
    ],
    mode: 'history'
})