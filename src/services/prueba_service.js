const EQUIVALENCIA_FIJO = {
    descripcion: 'Solicitud Objetos 1',
    fechaHora: '19-11-2021',
    estado: 'Aceptado',
}

export async function getEquivalencie(id) {
    return Promise.resolve({id, ...EQUIVALENCIA_FIJO});
}