import { createRouter, createWebHashHistory } from 'vue-router';
import Catalogue from '../pages/Catalog.vue';
import Cart from '../pages/Cart.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Catalogue
	},
	{
		path: '/panier',
		name: 'panier',
		component: Cart
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
  })

export default router