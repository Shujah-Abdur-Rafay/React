import axios from "axios";

const apiUrl = "http://localhost:5000/cellbazar";

export const sendMessageViaAxios = async (email,password) => {
    const js={
        email:email,
        password,password,
    }
    console.log(js);
    await axios.post(apiUrl,js)
//   try {
//     console.log(message);
//     const response = await axios.post(apiUrl, { message });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error sending message:", error.message);
//     throw error;
//   }
};
