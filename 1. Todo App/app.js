let btn = document.querySelector("button");
let ul = document.querySelector("#list-container");
let inp = document.querySelector("#input-box");

btn.addEventListener("click", function () {
  if (inp.value === "") {
    alert("Write something first");
  } else {
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);

    let span = document.createElement("span");

    span.innerHTML = "\u00d7";
    span.classList.add("del");

    li.appendChild(span);
  }
  inp.value = "";
  saveData();
});

ul.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}

function showTask() {
  ul.innerHTML = localStorage.getItem("data");
}
showTask();

// let delBtns = document.querySelectorAll(".del");
// for (let btn of delBtns) {
//   btn.addEventListener("click", function () {
//     let par = this.parentElement;
//     par.remove();
//   });
// }
// Using Event Delegation
ul.addEventListener("click", function (e) {
  if (e.target.nodeName == "BUTTON") {
    let par = e.target.parentElement;
    par.remove();
  }
});
