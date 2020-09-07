import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [listaCitas, guardarListaCitas] = useState(citasIniciales);

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));

    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(listaCitas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [listaCitas]);

  const crearCita = (cita) => {
    guardarListaCitas([...listaCitas, cita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = listaCitas.filter((cita) => cita.id !== id);
    guardarListaCitas(nuevasCitas);
  };

  const administraHeading =
    listaCitas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{administraHeading}</h2>
            {listaCitas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
