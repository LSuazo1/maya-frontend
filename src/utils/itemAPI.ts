import axios from "axios"


export const getItems = async (id: string) => {
    try {
        let res = await axios.get(`${process.env.API_URL}/api/items/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const createItem = async (data: object) => {
    try {
        const res = await axios.post(`${process.env.API_URL}/items`, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
