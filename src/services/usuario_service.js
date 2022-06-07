import axios from 'axios';
import { config } from '../config/config';

export async function getUsuario(id) {
    const apiResponse = await axios.get(`${config.apiUrl}/usuarios/${id}`);
    return apiResponse.data;
}
