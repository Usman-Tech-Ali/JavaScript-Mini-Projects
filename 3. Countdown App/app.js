const endDate = "23 June 2030 7:02 PM";

document.querySelector("#end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock() {
  let end = new Date(endDate);
  let now = new Date();

  let diff = (end - now) / 1000;

  if (diff < 0) {
    document.querySelector(".title").innerText = "You have reached your time";
    return;
  }
  console.log(now);
  console.log(end);
  console.log(diff);
  console.log("Days: ", Math.floor(diff / 3600 / 24));
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor((diff / 3600) % 24);
  inputs[2].value = Math.floor((diff / 60) % 60);
  inputs[3].value = Math.floor(diff % 60);
}

clock();
setInterval(() => {
  clock();
}, 1000);
