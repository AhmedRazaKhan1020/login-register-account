import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./config.js";
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const p = document.querySelector("#error");





form.addEventListener("submit", event => {
    event.preventDefault();
    // p.innerHTML = ""
    console.log(name.value);
    console.log(email.value)
     window.location="./index.html"

    createUserWithEmailAndPassword(auth, email.value, password.value,name.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            p.innerHTML = errorMessage
        });

})