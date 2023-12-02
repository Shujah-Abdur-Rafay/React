import axios from "axios"

const url = "http://localhost:5000";

export const sendMessageViaAxios = async () => {
    console.log("api called ");
   await axios.post(`${url}/`);
};
