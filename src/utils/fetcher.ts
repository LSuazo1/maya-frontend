import axios from "axios";

const instance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        // "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
    },
})


export const get = async (url: string) => {
    try {
        const res = await instance.get(url);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const post = () => {

}
