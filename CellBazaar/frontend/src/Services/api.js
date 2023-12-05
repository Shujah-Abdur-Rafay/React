import axios from "axios"

const url = "http://localhost:5000";

export const sendMessageViaAxios = async (data) => {
    alert(JSON.stringify(data));
   await axios.post(`${url}/cellBazaar`,data);
};
