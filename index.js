//
const button = document.querySelector(".btn--notification");
const output = document.querySelector(".show--output");
const message = document.querySelector(".btn--message");
const crossBtn = document.querySelector(".icon");
const messageContainer = document.querySelector(".message--div");

let arr = [
  {
    message: "Message Lorem ipsum dolor sit amet.",
    color: "red",
  },
  {
    message: "Message Lorem ipsum dolor.",
    color: "green",
  },
  {
    message: "Message  ipsum dolor sit amet.",
    color: "purple",
  },
  {
    message: "Message Lorem ipsum dolor sit amet amet amet.",
    color: "orange",
  },
];

// for show the message
button.addEventListener("click", addClickEvent);
message.addEventListener("click", () => {
  messageContainer.classList.add("show");
});

// for hide the message
crossBtn.addEventListener("click", () => {
  messageContainer.classList.remove("show");
});

function addClickEvent() {
  //to show output from array
  let index = Math.floor(Math.random() * arr.length);
  const { message, color } = arr[index];

  //create Element
  let paraElement = document.createElement("p");

  // assign value to new Element
  paraElement.textContent = message;
  paraElement.style.color = color;
  paraElement.classList.add("para");
  output.appendChild(paraElement);

  //for remove element
  setTimeout(() => {
    paraElement.remove();
  }, 3000);
}
