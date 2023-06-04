import axios from 'axios';
import { config } from '../config/config';

const getMock = () => {
    return {
        id: 1,
        instituto: 'ninguno',
        estado: 'aceptado',
        observaciones: 'falta analitico',
        createdAt: '2023-05-11T22:20:30.738Z',
        updatedAt: '2023-05-30T23:26:06.643Z',
        UsuarioId: 1,
        Materias_solicitadas: [
            {
                id: 1,
                nombre: 'Introducción a la Programación',
                carrera: 'Tecnicatura en informatica',
                createdAt: '2023-05-11T22:20:30.751Z',
                updatedAt: '2023-05-11T22:20:30.751Z',
                EquivalenciumId: 1,
                estado: 'aceptado'
            },
            {
                id: 2,
                nombre: 'Objetos 1',
                carrera: 'Tecnicatura en informatica',
                createdAt: '2023-05-11T22:20:30.751Z',
                updatedAt: '2023-05-11T22:20:30.751Z',
                EquivalenciumId: 2,
                estado: 'rechazado'
            },
            {
                id: 3,
                nombre: 'Nuevas Interfaces',
                carrera: 'Tecnicatura en informatica',
                createdAt: '2023-05-11T22:20:30.751Z',
                updatedAt: '2023-05-11T22:20:30.751Z',
                EquivalenciumId: 3,
                estado: 'pendiente'
            }
        ],
        Materias_aprobadas: [
            {
                id: 1,
                nota: 7,
                carga_horaria: 8,
                año_aprobacion: '2015-10-03T00:00:00.000Z',
                nombre_materia: 'Gramática I',
                certificado: true,
                createdAt: '2023-05-11T22:20:30.779Z',
                updatedAt: '2023-05-11T22:20:30.779Z',
                EquivalenciumId: 1,
                UniversidadOrigenId: 1
            },
            {
                id: 2,
                nota: 4,
                carga_horaria: 4,
                año_aprobacion: '2015-10-03T00:00:00.000Z',
                nombre_materia: 'Matematica II',
                certificado: true,
                createdAt: '2023-05-11T22:20:30.779Z',
                updatedAt: '2023-05-11T22:20:30.779Z',
                EquivalenciumId: 2,
                UniversidadOrigenId: 1
            },
            {
                id: 3,
                nota: 9,
                carga_horaria: 8,
                año_aprobacion: '2015-10-03T00:00:00.000Z',
                nombre_materia: 'Algoritmos I',
                certificado: true,
                createdAt: '2023-05-11T22:20:30.779Z',
                updatedAt: '2023-05-11T22:20:30.779Z',
                EquivalenciumId: 3,
                UniversidadOrigenId: 1
            }
        ],
        Usuario: {
            id: 1,
            dni: 30563652,
            nombre: 'Enzo',
            apellido: 'Fernandez',
            email: 'enzo@gmail.com',
            discord: '@enzoF',
            telefono: 44595568,
            rol: 'alumno',
            password: 'prueba',
            createdAt: '2023-05-11T22:20:30.714Z',
            updatedAt: '2023-05-11T22:20:30.714Z'
        }
    };
};

export async function getEquivalencia(id) {
    const apiResponse = await axios.get(
        `${config.apiUrl}/equivalencias/general/${id}`
    );
    //return apiResponse.data;
    return getMock();
}

export async function putEquivalencia(id) {
    const apiResponse = await axios.put(`${config.apiUrl}/equivalencias/${id}`);
    return apiResponse.data;
}
