//
const button = document.querySelector(".btn--notification");
const output = document.querySelector(".show--output");
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

  // for remove element
  setTimeout(() => {
    paraElement.remove();
  }, 3000);
}

//  FOR SHOW NOTIFICATION
button.addEventListener("click", addClickEvent);

// FOR ANOTHER BUTTON
const message = document.querySelector(".btn--message");

message.addEventListener("click", () => {
  let index = Math.floor(Math.random() * arr.length);
  const { message, color } = arr[index];

  // MAKE DIV CONTAINER AND APPEND WITH MAIN OUTPUT CONTAINER
  const divEle = document.createElement("div");
  output.appendChild(divEle);

  // CREATE PARAGRAPH AND BUTTON ELEMENT FOE MESSAGE AND DELETE
  const pEle = document.createElement("p");
  const buttonEle = document.createElement("button");

  // ASSIGN VALUE TO BOTH ELEMENT
  pEle.textContent = message;
  pEle.style.color = color;
  buttonEle.textContent = "X";

  // ADD CLASSES TO NEW CRETE ELEMENT
  divEle.classList.add("div__class");
  pEle.classList.add("div__class--para");
  buttonEle.classList.add("delete-btn");

  // APPEND CREATE ELEMENT TO THE NEW DIV CONTAINER ELEMENT
  divEle.appendChild(pEle);
  divEle.appendChild(buttonEle);

  // DELETE FUNCTIONALITY

  buttonEle.addEventListener("click", () => {
    divEle.remove();
  });
});
