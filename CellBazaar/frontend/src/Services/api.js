
import axios from "axios"

// https://cellbazaar-api.vercel.app;

const url = "https://cellbazaar-api.vercel.app";

export const senduserViaAxios = async (userData) => {
  alert("youre registered");
 await axios.post(`${url}/cellBazaarsignup`,userData);
};


export const sendMessageViaAxios = async (data) => {
    alert("ADDED");
   await axios.post(`${url}/cellBazaar`,data);
};
export const getViaAxios = async () => {
  return await axios.get(`${url}/cellBazaar`);
};
export const deleteViaAxios = async (id) => {
    return await axios.post(`${url}/cellBazaardel/:${id}`,id);
  };





export const updateProductViaAxios = async (modelNumber, updatedData) => {
  try {
    const response = await axios.put(`${url}/cellBazaar/update/${modelNumber}`, updatedData);
    alert("Product updated!");
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};
