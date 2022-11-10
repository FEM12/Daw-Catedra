
document.getElementById("guardar").addEventListener("click", function(){

  const name = document.getElementById("Name").value;
  const author = document.getElementById("Author").value;
  const gen = document.getElementById("Gen").value;

  
  const add = document.getElementById("co");
  add.innerHTML += `
  
  <div class="libro">
  
    <div class="centro">
  
      <p> ${name} </p>

        <p> ${author} </p>
  
      </div>
  
  </div>
  
  `;
  
})

