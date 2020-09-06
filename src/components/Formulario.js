import React, { Fragment, useState } from "react";

const Formulario = () => {
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

  const { mascota, duenio, fecha, hora, sintomas } = cita;

  const enviarFormulario = (e) => {
    e.preventDefault();
    // Validar
    // Asignar ID
    // Crear la cita
    // Reiniciar el form
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
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

export default Formulario;
