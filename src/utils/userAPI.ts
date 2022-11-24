import axios from "axios";

const instance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        // "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
    },
})

export const login = async (email: string, password: string) => {
    try {
        const res = await instance.post('/auth/signin', { email, password, });
        return res.data
    } catch (error) {
        console.log(error);
    }
};

export const signUp = async (data: {}) => {
    const res = await instance.post('/users', data)
        .then(res => res.data)
        .catch(err => console.log(err.response.data));
};


export const getUser = async () => {
    try {
        let res = await instance.get('/api/auth/me');
        return res.data.user;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const logout = async () => {
    try {
        await axios.get(process.env.API_URL + '/auth/signin');
    } catch (error) {
        console.log(error);
    }
};
