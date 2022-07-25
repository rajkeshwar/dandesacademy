// 1. Define route components.

import { createRouter, createWebHashHistory } from "vue-router"
import Home from '@/pages/Home.vue';
import Courses from '@/pages/Courses.vue';
import CourseDetails from '@/pages/CourseDetails.vue';
import About from '@/pages/About.vue';
import Contact from '@/pages/Contact.vue';
import LearningMgt from '@/pages/LearningMgt.vue';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { name: '/', path: '/', component: Home },
  { name: '/about-us', path: '/about-us', component: About },
  { name: '/contact-us', path: '/contact-us', component: Contact },
  { name: '/courses', path: '/courses', component: Courses },
  { name: '/courses-details', path: '/courses/:courseId', component: CourseDetails },
  { name: '/leaning-mgt', path: '/lms', component: LearningMgt },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
