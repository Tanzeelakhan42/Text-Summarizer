import sendText from "./sendText.js";

let textBox2 = document.querySelector("#text-box-2");
let textBox1 = document.querySelector("#text-box-1");
console.log(textBox1.value);

let summarizeBtn = document.querySelector("#summarize-button");
summarizeBtn.addEventListener("click", async function () {
  // let textBox = document.querySelector("#text-box-1");
  console.log(textBox1.value);
  let summarizedText = await sendText(textBox1.value);
  textBox2.value = summarizedText;
});

let clrbtn1 = document.querySelector("#clear-button-1");
clrbtn1.addEventListener("click", function () {
  // let textBox = document.querySelector("#text-box-1");
  textBox1.value = "";
  console.log("TextBox cleared");
});
