import axios from "axios";
import { config } from '../constant/config'

const BASE_URL = config.url.API_URL;

export default axios.create({
    baseURL: BASE_URL
    // baseURL: 'http://localhost:4000'
})