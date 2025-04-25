"use strict";

let text = document.querySelector("#text");
let lists = document.querySelector("#lists");
let image = document.querySelector("#image");
let confessText = document.querySelector("#confessText");
let noBtn = document.querySelector("#noBtn");
let yesBtn = document.querySelector("#yesBtn");

let pinkText = "text-pink-400";
let blueText = "text-blue-400";

function showText() {
  text.textContent = "I love you";
}

let orderNum = 0;
console.log("default orderNum:", orderNum);
function addListItem() {
  let listItem = document.createElement("li");
  listItem.innerHTML = "New list item";
  lists.appendChild(listItem);
  orderNum++; // orderNum = orderNum + 1;
  console.log(orderNum);
}

function removeListItem() {
  let lastListItem = document.querySelectorAll("li")[orderNum];
  lists.removeChild(lastListItem);
  orderNum--; // orderNum = orderNum - 1;
  console.log("after remove:", orderNum);
}

console.log("image src:", image.getAttribute("src"));


let noBtnScale = 1;
let yesBtnScale = 1;

noBtn.addEventListener("click", function () {
  // image.setAttribute(
  //   "src",
  //   "https://i.pinimg.com/736x/1f/f7/4b/1ff74b5a68ff857ec39654e33a4306d3.jpg"
  // );
  image.src =
    "https://i.pinimg.com/736x/1f/f7/4b/1ff74b5a68ff857ec39654e33a4306d3.jpg";
  confessText.innerHTML = "Ohh no, i'm so sad";
  console.log("image src:", image.getAttribute("src"));
  confessText.classList.remove(pinkText);
  confessText.classList.add(blueText);

  noBtnScale = noBtnScale - 0.1;
  yesBtnScale = yesBtnScale + 0.2;

  noBtn.style.transform = `scale(${noBtnScale})`;
  yesBtn.style.transform = `scale(${yesBtnScale})`
  noBtn.style.color = "black"
});

yesBtn.addEventListener("click", function () {
  image.src = "https://i.redd.it/ph6px2drilw71.png";
  confessText.innerHTML = "Yay, I love you too";
  console.log("image src:", image.getAttribute("src"));
  confessText.classList.remove(blueText);
  confessText.classList.add(pinkText);
});

let usernameInputField = document.querySelector("#username");
let submitBtn = document.querySelector("#submit");
let usernameInputted = document.querySelector("#inputName");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let username = usernameInputField.value;
  usernameInputted.innerHTML = username;
  usernameInputField.value = "";
});


let fruit = 4.5;

console.log("type fruit:", typeof(fruit))
console.log("fruit:", fruit)

fruit = "apple";
console.log("type fruit:", typeof(fruit))
console.log("fruit:", fruit)
fruit[1] = "s";
console.log("fruit:", fruit)