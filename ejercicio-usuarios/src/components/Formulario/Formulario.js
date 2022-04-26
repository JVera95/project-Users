import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Formulario({ setUsuarios }) {
  // const [nombre, setNombre] = useState("");
  // const [apellido, setApellido] = useState("");
  // const [direccion, setDireccion] = useState("");
  // const [ciudad, setCiudad] = useState("");
  // const [codigoPostal, setCodigoPostal] = useState("");
  // const [telefono, setTelefono] = useState("");

  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    telefono: "",
  });

  function handleUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  // const handleNombre = (e) => setNombre(e.target.value);
  // const handleApellido = (e) => setApellido(e.target.value);
  // const handleDireccion = (e) => setDireccion(e.target.value);
  // const handleCiudad = (e) => setCiudad(e.target.value);
  // const handleCodigoPostal = (e) => setCodigoPostal(e.target.value);
  // const handleTelefono = (e) => setTelefono(e.target.value);

  const usuario = {
    id: uuidv4(),
    nombre: user.nombre,
    apellido: user.apellido,
    direccion: user.direccion,
    ciudad: user.ciudad,
    codigoPostal: user.codigoPostal,
    telefono: user.telefono,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuarios((usuarios) => [...usuarios, usuario]);
    console.log(usuario);
  };

  return (
    <div>
      <h1>Nuevo contacto</h1>
      <div className="w-100 mt-5 mb-5 mx-auto">
        <div className="container mt-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                onChange={handleUser}
                name="nombre"
                placeholder="Introduce un nombre"
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={handleUser}
                name="apellido"
                placeholder="Introduce los apellidos"
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={handleUser}
                name="direccion"
                placeholder="Introduce la dirección"
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={handleUser}
                name="ciudad"
                placeholder="Introduce la província"
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={handleUser}
                name="codigoPostal"
                placeholder="Introduce el código postal"
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={handleUser}
                name="telefono"
                placeholder="Introduce el número de teléfono"
                type="text"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
