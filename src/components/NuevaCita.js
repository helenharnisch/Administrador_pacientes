import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types'

const stateInicial = {
    cita: {
        paciente : '',
        pariente : '',
        fecha : '',
        hora : '', 
        sintomas : ''

    }, 
    error: false

}

class NuevaCita extends Component {
    state = { ...stateInicial }
    
    //Cuando el usuario escribe en los inputs
    handleChange = e => {
        // console.log(e.target.name + ': ' + e.target.value);
        
        //Colocar lo que le usuario escribe en el state
        this.setState({
            cita: {
                ...this.state.cita, 
                [e.target.name] : e.target.value
            }
        })
    }

    //Cuando el usuario envia el formulario
    handleSubmit = e => {
        e.preventDefault();

        // Extraer los valores del state
        const { paciente, pariente, fecha, hora, sintomas } = this.state.cita;


        // Validar que todos los campos esten llenos

        if (paciente === '' || pariente === '' || fecha === '' || hora === '' || sintomas === '' ){
            this.setState({
                error: true
            });

           // Detener la ejecucuión 
            return;
        }

        // Generar objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        console.log('Despues del if');
        // Agregar la cita al state de App

        this.props.crearNuevaCita(nuevaCita)

        // Colocar en el state el stateInicial
        this.setState({
            ...stateInicial
        })
    }


    render() {

        // Extraer valor del state 
        const { error } = this.state;

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h4 className="card-title text-center mb-5">Llena el formulario para crear nueva cita</h4>

                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div>:null }
                    
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Paciente</label>
                                <div className="col-sm-8 col-lg-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre Paciente"
                                        name="paciente"
                                        onChange={this.handleChange}
                                        value={this.state.cita.paciente}
                                    />
                                </div>
                            </div>{ /* Form group */}
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Pariente</label>
                                <div className="col-sm-8 col-lg-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre Pariente"
                                        name="pariente"
                                        onChange={this.handleChange}
                                        value={this.state.cita.pariente}
                                    />
                                </div>
                            </div>{ /* Form group */}
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                                <div className="col-sm-8 col-lg-4">
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="fecha"
                                        onChange={this.handleChange}
                                        value={this.state.cita.fecha}
                                    />
                                </div>

                                <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                                <div className="col-sm-8 col-lg-4">
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="hora"
                                        onChange={this.handleChange}
                                        value={this.state.cita.hora}
                                    />
                                </div>
                            </div>{ /* Form group */}
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                                <div className="col-sm-8 col-lg-10">
                                    <textarea
                                        className="form-control"
                                        placeholder="Describe los sintomas"
                                        name="sintomas"
                                        onChange={this.handleChange}
                                        value={this.state.cita.sintomas}
                                    />
                                </div>
                            </div>{ /* Form group */}
                            <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita"></input>
                        </form>

                </div>
                
            </div>
        );
    }
}

NuevaCita.propTypes = {
    crearNuevaCita : PropTypes.func.isRequired
}

export default NuevaCita;

