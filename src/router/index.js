import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import Project from '@/pages/Project.vue'
import Blog from '@/pages/Blog.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/project',
            name: 'Project',
            component: Project
        },
        {
            path: '/404',
            name: 'Blog',
            component: Blog
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})