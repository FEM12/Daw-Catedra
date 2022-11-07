
document.getElementById("guardar").addEventListener("click", function(){

  const name = document.getElementById("Name").value;
  const author = document.getElementById("Author").value;
  const gen = document.getElementById("Gen").value;

  const libros = {

    nombre:name,
    autor:author,
    genero:gen,

  }

  for (const i in libros) {
    
    console.log(libros[i]);

  }


})