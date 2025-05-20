import axios from "axios";
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '05b7455eef254582b7b76df2c339776a'
    }
})