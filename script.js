const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

console.log(input);
function btnClick() {
  checkBtn.addEventListener("click", () => {
    console.log(input.value);
  });
}
btnClick();
