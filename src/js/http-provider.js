// Peticion http a un hosting (fetch)
const urlUsuarios = "https://reqres.in/api/users?page=2";

const obtenerUsuarios = async () => {
  try {
    const resp = await fetch(urlUsuarios);

    if (!resp.ok) throw "No se pudo realizar la petición";

    const { data } = await resp.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export { obtenerUsuarios };
