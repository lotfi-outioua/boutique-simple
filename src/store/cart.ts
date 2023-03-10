import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { CartItem } from "../types/cart";
import { Product } from "../types/product";

export const useCartStore = defineStore('cart', () => {
	const cartItems = ref<CartItem[]>([]);
	const countCartItems = computed(() => cartItems.value.reduce(
		(acc, currentVal) => acc + currentVal.quantity, 0
	))
	const totalPriceCart = computed(() => cartItems.value.reduce(
		(acc, currentVal) => acc + (currentVal.product.price * currentVal.quantity), 0
	))
	const addCartItem = (product: Product) => {
		const index = cartItems.value.findIndex((cartItem) => cartItem.product.id === product.id)
		
		if (index === -1) {
			cartItems.value.push({
				product,
				quantity: 1
			})
		} else {
			cartItems.value[index].quantity += 1
		}
	}

	return { cartItems, addCartItem, countCartItems, totalPriceCart };
})