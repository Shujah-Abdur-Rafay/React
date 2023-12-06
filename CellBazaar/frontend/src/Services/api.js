import axios from "axios"

const url = "http://localhost:5000";

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
