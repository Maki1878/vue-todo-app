import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddTodo from '../views/AddTodo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddTodo',
    component: AddTodo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
