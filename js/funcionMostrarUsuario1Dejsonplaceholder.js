function MostrarUsuario1() {
    var Datos;
enlace = "https://jsonplaceholder.typicode.com/todos/1"
fetch(enlace)
  .then(response => response.json())
  .then(data => Datos = data)
console.log("Imprimiendo nomP inmediatamente", Datos)

setTimeout(function() {
  console.log("Imprimiendo nomP luego de 8 segundos", Datos)

    //const Parrafo1 = document.createElement("p");
    //Parrafo1.innerHTML = JSON.stringify(Datos.title);
    //document.getElementById("Contenedor").appendChild(Parrafo1);

    /* Crear Formulario y mostrar los datos obtenidos */

    var UsuarioId = document.getElementById("lblUsuarioId");
    var Id = document.getElementById("lblId");
    var UsuarioTitle = document.getElementById("lblTitle");
    var UsuarioCompleted = document.getElementById("lblCompleted");
    
     UsuarioId.innerHTML = JSON.stringify(Datos.userId);
     Id.innerHTML = JSON.stringify(Datos.id);
     UsuarioTitle.innerHTML = JSON.stringify(Datos.title);
     UsuarioCompleted.innerHTML = JSON.stringify(Datos.completed);

}, 4000);

}