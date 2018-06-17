const btn= document.querySelector("button");
const container = document.getElementById("root")
const userJson = "http://127.0.0.1:8887/users.json"

fetch(userJson)
.then(response => response.json())
.then(data => {
  console.log(data);
  renderUsers(data);
})

const renderUsers = data => {
  btn.addEventListener("click", () =>{
    const render = data.forEach(element => {
      return container.innerHTML += `<p>${element.name}</p>`  
    })
    return render;
  })
}