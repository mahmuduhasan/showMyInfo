const img = document.querySelector("img");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.font = "20px Arial";
ctx.fillStyle = "blue";
ctx.strokeStyle = "blue";
ctx.strokeText("Github :", 10, 200, 300);
ctx.fillText("https://github.com/mahmuduhasan", 90, 200, 300);
ctx.strokeText("Facebook :", 10, 250, 300);
ctx.fillText("https://facebook.com/a.s.hasan2", 120, 250, 300);
ctx.strokeText("Address :", 10, 300, 300);
ctx.fillText("Nikunjo-2, Khilkhet, Dhaka", 100, 300, 300);
ctx.strokeText("Phone :", 10, 350, 300);
ctx.fillText("+8801310272288", 85, 350, 300);
let flag = false;
let start;
function showInfo(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const diff = timestamp - start;
  //   console.log(diff);
  if (diff > 1000) {
    console.log(diff);
    flag = true;
  }
  if (flag) {
    canvas.style.visibility = "visible";
    return;
  }
  img.style.transform = `translateX(${diff / 10}px)`;
  requestAnimationFrame(showInfo);
}

requestAnimationFrame(showInfo);
