// List of characters we can use for the password
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function generateRandomPassword() {
  let password = "";
  for (let i = 0; i < 15; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

console.log(generateRandomPassword());

function generatePassword() {
  // Hide the original "Generate Passwords" button
  //   document.getElementById("generateButton").style.display = "none";

  const passwordContainer = document.getElementById("passwordButtons");
  passwordContainer.innerHTML = "";
  for (let i = 0; i < 2; i++) {
    const password = generateRandomPassword();

    const newButton = document.createElement("button");
    newButton.textContent = password;

    newButton.style.backgroundColor = "#273549";
    newButton.style.color = "#4ADF86";
    newButton.style.padding = "10px";
    newButton.style.margin = "10px";
    newButton.style.border = "none";
    newButton.style.cursor = "pointer";
    newButton.style.width = "200px";

    newButton.title = "Click to copy";

    newButton.addEventListener("click", function () {
      navigator.clipboard.writeText(password).then(function () {
        newButton.textContent = "Copied!";
        setTimeout(() => {
          newButton.textContent = password;
        }, 2000);
      });
    });

    passwordContainer.appendChild(newButton);
  }
}
