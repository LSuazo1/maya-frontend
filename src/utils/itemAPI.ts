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
    await axios.post(`${process.env.API_URL}/items`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(res => res.data)
        .catch(err => console.log(err.response.data))
}
