export default function Agenda({ usuarios, setUsuarios }) {
  const handleDelete = (id) => {
    window.alert("Usuario eliminado.");
    setUsuarios(usuarios.filter((contacto) => contacto.id !== id));
  };
  return (
    <div className="w-100 mt-5 mb-5 mx-auto">
      <h1>Lista de contactos</h1>
      <div className="container mt-5">
        <div className="row">
          {usuarios.map(
            (
              {
                id,
                nombre,
                apellido,
                direccion,
                ciudad,
                codigoPostal,
                telefono,
              },
              index
            ) => (
              <div key={id} className="col">
                <ul className="list-group">
                  <li className="list-group-item active" aria-current="true">
                    Contacto {index}
                  </li>

                  <li className="list-group-item">{nombre}</li>
                  <li className="list-group-item">{apellido}</li>
                  <li className="list-group-item">{direccion}</li>
                  <li className="list-group-item">{ciudad}</li>
                  <li className="list-group-item">{codigoPostal}</li>
                  <li className="list-group-item">{telefono}</li>
                  <li className="list-group-item">
                    <button
                      onClick={() => handleDelete(id)}
                      type="button"
                      className="btn btn-warning"
                    >
                      Eliminar
                    </button>
                  </li>
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
