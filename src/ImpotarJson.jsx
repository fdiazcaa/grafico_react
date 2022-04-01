import React from "react";

const ImportarJson = () => {
  const [datos, setDatos] = React.useState([]);

  React.useEffect(() => {
    console.log("useEffect");
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/");
    const comments = await data.json();
    console.log(comments);
    setDatos(comments);
  };

  const data = () => {data.map((item) => (<li key="id">{item.phone} - {item.name} - {item.email}</li>
  )) }
  
  return (
    

    <div>
      <h1> Obtención de datos </h1>
      <ul>
        {datos.map((item) => (
          <li key="id">
            {} {item.phone} - {item.name} - {item.email} {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImportarJson;
