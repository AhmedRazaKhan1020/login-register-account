import {collection, addDoc, doc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import {db} from "./homeconfig.js";
const form = document.querySelector("#form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const deletebtn = document.querySelector("#delete");
const editbtn = document.querySelector("#edit");
const div= document.querySelector(".main");

// const p = document.querySelector("#error");

 form.addEventListener("submit", async (event) => {
    event.preventDefault();

    console.log(title.value);
    // console.log(description.value);

try {
  const docRef = await addDoc(collection(db, "users"), {
    title: title.value,
    description: description.value,
  });
  div.innerHTML+=`<div class="child">
  <span class="color">Item : </span> ${title.value}</br>
  <span class="color">Description:</span>${description.value}</br>
  <span class="color">Id:</span>${docRef.id}</br>
  <button id="delete">Delete</button>
    <button id="edit">Edit</button>
</div></br>`
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.log("Error adding document: ", e);
}
})


// editbtn.addEventListener("click",async(event)=>{
//     event.preventDefault
 


//     const frankDocRef = doc(db, "users", "frank");
// await updateDoc(frankDocRef, {
//     "title": editprompt,
// });

// } )

