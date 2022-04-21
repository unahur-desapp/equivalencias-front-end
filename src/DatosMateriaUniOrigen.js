import { MateriaUniOrigen } from './MateriaUniOrigen';

const DatosMateriaUniOrigen = ({ formValue, handleChange }) => {
    return (
        <>
            <MateriaUniOrigen
                formValue={formValue}
                handleChange={handleChange}
            />
        </>
    );
};

export { DatosMateriaUniOrigen };
