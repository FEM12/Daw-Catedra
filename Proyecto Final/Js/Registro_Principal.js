
//Variables a nivel global
const contenedorLib = document.getElementById('co');
let libArray = [];

//Funciones
const crearLibro = (nombreLibro, autorLibro) => {

  let Libro = { nombre:nombreLibro, autor:autorLibro };
  libArray.push(Libro);

  return Libro;
}

function guardarLibro () { 
  
  localStorage.setItem('libros', JSON.stringify(libArray)); 

  mostrarLib();

}

