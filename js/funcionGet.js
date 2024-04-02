function FetchGet() {

    let Datos = {
        userId: 1,
    }

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      /* Función que crea un parrafo en un div existente */


    const Parrafo1 = document.createElement("p");

    Parrafo1.innerHTML = JSON.stringify(Datos);

    document.getElementById("Contenedor").appendChild(Parrafo1);

}