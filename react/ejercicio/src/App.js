import "./estilos/App.css";

import React, { useState } from "react";

import "./estilos/App.css";
import empleadosData from "./datos/empleados.json";
import CmpEmpleados from "./componentes/CmpEmpleados";

function App() {
  const [state, setState] = useState({
    empleados: empleadosData,
    filtro: "todos",
  });

  const cambiarEstadoEmpleado = (id) => {
    setState((prevState) => ({
      empleados: prevState.empleados.map((empleado) =>
        empleado.id === id
          ? { ...empleado, activo: !empleado.activo }
          : empleado
      ),
    }));
  };

  const cambiarFiltro = (event) => {
    console.log(event.target.value);
    setState({ ...state, filtro: event.target.value });
  };

  const empleadosFiltrados = state.empleados.filter((empleado) => {
    if (state.filtro === "activos") return empleado.activo;
    if (state.filtro === "inactivos") return !empleado.activo;
    return true; // "todos" muestra todos
  });

  return (
    <div className="container">
      <h1>Gestor de empleados</h1>
      <label>Filtrar por estado: </label>
      <select onChange={cambiarFiltro} value={state.filtro}>
        <option value="todos">Todos</option>
        <option value="activos">Activos</option>
        <option value="inactivos">Inactivos</option>
      </select>
      <CmpEmpleados
        empleados={empleadosFiltrados}
        cambiarEstado={cambiarEstadoEmpleado}
      />
    </div>
  );
}

export default App;
