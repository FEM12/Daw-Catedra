
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

function mostrarLib () {

  contenedorLib.innerHTML = '';

  libArray = JSON.parse(localStorage.getItem('libros'));

  if(libArray === null){ libArray = []; }
  else{

    libArray.forEach(e => {
      
      contenedorLib.innerHTML += `
      
      <div class="libro">
    
        <div class="centro"> <p> ${e.nombre} </p> <p> ${e.autor} </p> </div>

      </div>
      
      `

    });

  }


}

//Eventos

document.getElementById('guardar').addEventListener('click', (e) => {

  let txtnombre = document.getElementById('name').value;
  let txtautor = document.getElementById('author').value;
  let txtgenero = document.getElementById('gen').value;

  if(txtnombre == '' || txtautor == '' || txtgenero == ''){ alert('Por favor rellene todos los campos') }
  else{ 

    crearLibro(txtnombre, txtautor);
    guardarLibro();

    document.getElementById('name').value = '';
    document.getElementById('author').value = '';
    document.getElementById('gen').value = '';

  }

})

document.addEventListener('DOMContentLoaded', mostrarLib);