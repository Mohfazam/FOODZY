import axios from "axios";
import { BASE_URL } from "./config";

export const fetchProducts = async () => {
    const data = await axios.get(`${BASE_URL}/api/v1/products/allProducts`);
    return data.data.products;
}