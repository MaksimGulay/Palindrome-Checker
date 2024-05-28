// document.getElementById("check-btn").addEventListener("click", function () {
//   const inputText = document.getElementById("text-input").value;
//   const normalizedText = inputText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   const reversedText = normalizedText.split("").reverse().join("");
//   const isPalindrome = normalizedText === reversedText;
//   const result = document.getElementById("result");
//   if (isPalindrome) {
//     result.textContent = `"${inputText}" is a palindrome.`;
//   } else {
//     result.textContent = `"${inputText}" is not a palindrome.`;
//   }
// });

const result = document.getElementById("result");
const button = document.getElementById("check-btn");

button.addEventListener("click", function () {
  const inputText = document.getElementById("text-input").value;
  const normalizedText = inputText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedText = normalizedText.split("").reverse().join("");
  const isPalindrome = normalizedText === reversedText;
  if (isPalindrome) {
    result.textContent = `"${inputText}" is a palindrome.`;
  } else {
    result.textContent = `"${inputText}" is not a palindrome.`;
  }
});
