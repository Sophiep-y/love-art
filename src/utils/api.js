import axios from 'axios'

export const http = axios.create({
    baseURL: `${process.env.REACT_APP_ENDPOINT}`,
    timeout: 30000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});


