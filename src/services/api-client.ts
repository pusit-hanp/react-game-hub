import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'355a512abf804535bffa6a04e008759d'
    }
})