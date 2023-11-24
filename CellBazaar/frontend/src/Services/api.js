import axios from "axios";

const url = "http://localhost:5000";

export const sendMessageViaAxios = async () => {

    console.log("axios api reached... ");
    return await axios.get ("http://localhost:5000");
    
}