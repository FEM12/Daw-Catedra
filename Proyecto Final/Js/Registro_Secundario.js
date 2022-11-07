document.getElementById("save").addEventListener("click", function(){

  const name = document.getElementById("nombre").value;
  const autor = document.getElementById("autor").value;

  const add = document.getElementById("co-1");
  add.innerHTML += `
  
  <div class="cuerpo">
  
    <p> ${name} </p>

    <div class="sub_cuerpo">

      <p> ${autor} </p>

    </div>

  </div>
  
  `;
})