import axios from "axios";
// import { sendUserViaAxios as localSendUserViaAxios } from '../Services/api';

axios.defaults.withCredentials = true;

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const sendMessageViaAxios = async (data) => {
  alert("ADDED");
  await axios.post(`${apiUrl}/cellBazaar`, data);
};

export const getViaAxios = async () => {
  return await axios.get(`${apiUrl}/cellBazaar`);
};

export const deleteViaAxios = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/cellBazaar/${id}`);
    alert("DELETED");
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

 export const senduserViaAxios = async (name, email, password) => {
   try {
     const response = await axios.post(`${apiUrl}/cellBazaarsignup`, { name, email, password });
     alert("You're registered");
     return response.data;
   } catch (error) {
     console.error('Error registering user:', error);
     throw error;
   }
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
