function FetchPost() {
    // datos mandados con la solicitud POST
let _datos = {
    /*titulo: "foo",
    principal: "bar",
    Id:101*/
    userId:11,
    id:101,
    title: "Titulo de prueba",
    body: "Texto en el body"
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(_datos),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));
}