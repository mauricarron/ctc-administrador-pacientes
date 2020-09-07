import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    duenio: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const [error, actualizarError] = useState(false);

  const { mascota, duenio, fecha, hora, sintomas } = cita;

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (
      mascota.trim() === "" ||
      duenio.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    actualizarError(false);

    cita.id = uuid();

    crearCita(cita);

    actualizarCita({
      mascota: "",
      duenio: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={enviarFormulario}>
        <label>Mascota</label>
        <input
          type="text"
          name="mascota"
          placeholder="Nombre de la Mascota"
          className="u-full-width"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Dueño</label>
        <input
          type="text"
          name="duenio"
          placeholder="Nombre del Dueño"
          className="u-full-width"
          onChange={actualizarState}
          value={duenio}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          step="600"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
