import axios from "axios";

export const login = async (email: string, password: string) => {
    try {
        const res = await axios.post(`${process.env.API_URL}/auth/signin`, {
            email,
            password,
        });
        return res.data
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async () => {
    try {
        let res = await axios.get(`${process.env.API_URL}/api/auth/me`);
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
