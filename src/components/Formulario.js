import React, { Fragment } from "react";

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Mascota</label>
        <input
          type="text"
          name="mascota"
          placeholder="Nombre de la Mascota"
          className="u-full-width"
        />
        <label>Dueño</label>
        <input
          type="text"
          name="duenio"
          placeholder="Nombre del Dueño"
          className="u-full-width"
        />
        <label>Fecha</label>
        <input type="date" name="date" className="u-full-width" />
        <label>Hora</label>
        <input type="time" name="time" className="u-full-width" />
        <label>Síntomas</label>
        <textarea name="sintomas" className="u-full-width"></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
