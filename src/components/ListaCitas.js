import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListaCitas = ({citas, eliminarCita}) => {

    //imprimir un mensaje en base si hay citas o no
    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aqui';

    return (
        //<h1>Desde listas Citas</h1>
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h4 className="card-title text-center">{mensaje}</h4>
                <div className="lista-citas">
                    {citas.map(cita =>(
                        <Cita
                        key={cita.id}
                        cita={cita}
                        eliminarCita={eliminarCita}
                        />
    
                    ))}
                </div>
            </div>
        </div>
    
    );
}

ListaCitas.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita : PropTypes.func.isRequired
}

export default ListaCitas;