const search = document.querySelector("#search");
const list = document.querySelector("section").children;
const friend = document.getElementById("addfriend");
let deletebtn = document.querySelectorAll(".delete");
const addBtn = document.querySelector("#addbtn");
// let names = [];
// if (localStorage.getItem("names") != null) {
//   names = localStorage.getItem("names").split(",");
//   names.forEach((elem) => {
// document.querySelector(
//   "section"
// ).innerHTML += `<li >${elem} <button class="delete">X</button></li>`;
// });
// }
// Adding
addBtn.addEventListener("click", addLi);
function addLi() {
  let val = friend.value;
  val = firstBig(val);
  document.querySelector(
    "section"
  ).innerHTML += `<li >${val} <button class="delete">X</button></li>`;
  deletebtn = document.querySelectorAll(".delete");
  Array.from(deletebtn).forEach((elem) => {
    elem.addEventListener("click", deleteName);
  });
  friend.value = "";
}

// Searching
search.addEventListener("input", showResult);
// Creating the function
function showResult() {
  let val = search.value.toLowerCase();
  Array.from(list).forEach((elem) => {
    if (elem.innerText.toLowerCase().includes(val) === true) {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  });
}
Array.from(deletebtn).forEach((elem) => {
  elem.addEventListener("click", deleteName);
});
function deleteName(e) {
  console.log("hello");
  document.querySelector("section").removeChild(e.target.parentNode);
}

//  Extra functions
function firstBig(val) {
  val.trim();
  let val1 = val[0].toUpperCase();
  val = val.substring(1, val.length);
  val = val1.concat(val);
  return val;
}
