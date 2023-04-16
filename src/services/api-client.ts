import axios from "axios";

export default axios.create({
    baseURL: 'https1://api.rawg.io/api',
    params: {
        key: "31baff1aeff74f3ab0fe06a0c9bc59a1"
    }
})