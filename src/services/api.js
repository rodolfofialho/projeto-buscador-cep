import axios from "axios";

//  08583520/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;