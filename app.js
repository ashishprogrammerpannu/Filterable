const search = document.querySelector("#search");
const list = document.querySelector("section").children;
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
