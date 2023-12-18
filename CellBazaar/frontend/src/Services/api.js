import axios from "axios";

axios.defaults.withCredentials=true

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const sendMessageViaAxios = async (data) => {
    alert("ADDED");
    await axios.post(`${apiUrl}/cellBazaar`, data);
};

export const getViaAxios = async () => {
    return await axios.get(`${apiUrl}/cellBazaar`);
};

export const deleteViaAxios = async (id) => {
    return await axios.post(`${apiUrl}/cellBazaardel/:${id}`, id);
};

export const sendUserViaAxios = async (userData) => {
    alert("you're registered");
    await axios.post(`${apiUrl}/cellBazaarsignup`, userData);
};

export const updateProductViaAxios = async (modelNumber, updatedData) => {
    try {
        const response = await axios.put(`${apiUrl}/cellBazaar/update/${modelNumber}`, updatedData);
        alert("Product updated!");
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};
