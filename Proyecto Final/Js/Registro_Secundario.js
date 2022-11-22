//Variables a nivel global
const lblCo = document.getElementById('co-1');
let lblArray = [];

//Funciones
const createList = (nL, aL) => {

  let lista = { nombre:nL, autor:aL };
  lblArray.push(lista);

  return lista;
}

function saveList () { 
  
  localStorage.setItem('lista', JSON.stringify(lblArray)); 
  addList();

}

function addList () {

  lblCo.innerHTML = '';

  lblArray = JSON.parse(localStorage.getItem('lista'));

  if(lblArray === null){ lblArray = []; }
  else{

    lblArray.forEach(e => {
      
      lblCo.innerHTML += `
      
      <div class="listas">

        <div class="union">

          <div class="cuerpo"> <p> ${e.nombre} </p> </div>
          <div class="sub_cuerpo"> <p> ${e.autor} </p> </div>

        </div>

      </div>
      
      `

    });

  }

}

//Eventos
document.getElementById('save').addEventListener('click', (e) => {

  let txtnombre = document.getElementById('nombre').value;
  let txtautor = document.getElementById('autor').value;

  if(txtnombre == '' || txtautor == ''){ alert('Por favor rellene todos los campos'); }
  else{

    createList(txtnombre, txtautor);
    saveList();

  }
  
})

document.addEventListener('DOMContentLoaded', addList);