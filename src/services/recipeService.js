import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const searchRecipe = async (query, number) => {
    try {
        const response = await axios.get(`${API_URL}/complexSearch?apiKey=${API_KEY}&query=${query}&number=${number}`)
        return response.data
    } catch (error) {
        console.log(`Error fetching recipes: ${error}`)
        throw error
    }
}

export const getRecipeDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}/information?apiKey=${API_KEY}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(`Error fetching recipes: ${error}`)
        throw error
    }
}

export const getSimilarRecipes = async (id, number) => {
    try {
        const response = await axios.get(`${API_URL}/${id}/similar?apiKey=${API_KEY}&number=${number}`)
        return response.data
    } catch (error) {
        console.log(`Error fetching recipes: ${error}`)
        throw error
    }
}
