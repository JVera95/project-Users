import "./App.css";
import Agenda from "./components/Agenda";
import Formulario from "./components/Formulario";
import { useState } from "react";

const users = [
  {
    id: 1,
    nombre: "Adrian",
    apellido: "Molina",
    direccion: "C/ Goya",
    ciudad: "Málaga",
    codigoPostal: 29004,
    telefono: "654786907",
  },
  {
    id: 2,
    nombre: "Javier",
    apellido: "Gutierrez",
    direccion: "C/ Salitre",
    ciudad: "Cádiz",
    codigoPostal: 29005,
    telefono: 645789214,
  },
  {
    id: 3,
    nombre: "Miguel",
    apellido: "Torres",
    direccion: "C/ Santa Eugenia",
    ciudad: "Madrid",
    codigoPostal: 29003,
    telefono: 632459871,
  },
];

function App() {
  const [usuarios, setUsuarios] = useState(users);
  return (
    <div className="App">
      <Agenda setUsuarios={setUsuarios} usuarios={usuarios} />
      <Formulario setUsuarios={setUsuarios} />
    </div>
  );
}

export default App;
