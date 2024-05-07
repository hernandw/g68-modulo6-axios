/* const url = "https://randomuser.me/api/?results=100"; */
const url = "https://jsonplaceholder.typicode.com/users"


const cargarDatos = async () => {
    
    const res = await fetch(url);
    const datos = await res.json();
    console.log(datos);
};


cargarDatos();
