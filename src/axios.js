import axios from 'axios';

const instance = axios.create({
    baseURL: "https://friendr29backend.herokuapp.com",
})

export default instance;