import axios from "axios";
import {config} from '../constant/config'

export default axios.create({
    baseURL: config.url.API_URL
})