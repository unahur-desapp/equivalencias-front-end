import axios from 'axios';
import {config} from '../config/config';

export async function getEquivalencia(){
    const apiResponse   = await axios.get(`${config.apiUrl}/equivalencias/solicitada`);
    return apiResponse.data

}