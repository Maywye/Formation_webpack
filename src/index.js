import User from "./class/User";
import "bootstrap/scss/bootstrap.scss"
import "./scss/style.scss"
import "./css/style.css"

console.log("Hello World!");

const user = new User('John', 'Doe');

console.log(`Bonjour ${user.getFullname()}`);

document.querySelector(".fullname").innerHTML = `Bonjour ${user.getFullname()}`;

//ou 

const p = document.querySelector("#hello_message");
p.innerHTML = `Bonjour ${user.getFullname()}`;


fetch ('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => console.log(json))