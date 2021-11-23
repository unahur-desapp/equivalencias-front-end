import axios from 'axios';
import {config} from '../config/config';

export async function getEquivalencia(id){
    const apiResponse   = await axios.get(`${config.apiUrl}/equivalencias/${id}`);
    return apiResponse.data

}