import { CATEGORIES_API_URL, PRODUCTS_API_URL } from "../constants";
import { Category } from "@/src/types/category";
import { Product } from "@/src/types/product";
import axios from "axios";

class ProductService {
	async getAllProducts(): Promise<Product[]> {
		try {
			const response = await axios.get(PRODUCTS_API_URL)
			return response.data
		} catch (error) {
			return []
		}
	}
	async getProductById(id: string): Promise<Product | null> {
		try {
			const response = await axios.get(`${PRODUCTS_API_URL}/${id}`)
			return response.data
		} catch (error) {
			return null
		}
	}
	async getAllCategories(): Promise<Category[]> {
		try {
			const response = await axios.get(CATEGORIES_API_URL)
			return response.data
		} catch (error) {
			return []
		}
	}
	async getCategoryById(id: string): Promise<Category | null> {
		try {
			const response = await axios.get(`${CATEGORIES_API_URL}/${id}`)
			return response.data
		} catch (error) {
			return null
		}
	}
}

export default new ProductService()