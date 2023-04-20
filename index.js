//
const button = document.querySelector(".btn");
const output = document.querySelector(".show--output");
button.addEventListener("click", addClickEvent);

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

function addClickEvent() {
  //to show output from array
  let index = Math.floor(Math.random() * arr.length);
  const { message, color } = arr[index];

  //create Element
  let paraElement = document.createElement("p");

  // assign value to new Element
  paraElement.textContent = message;
  paraElement.style.color = color;
  output.appendChild(paraElement);

  //for remove element
  setTimeout(() => {
    paraElement.remove();
  }, 3000);
}
