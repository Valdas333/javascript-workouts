const morseCode = require("./morseCode");

function elfMorse(message) {
  message = message.toUpperCase();
  const morseMessage = message
    .split("")
    .map((letter) => morseCode[letter] || "?")
    .join("");

  const elfMessage = morseMessage
    .split("")
    .map((char) => {
      if (char === ".") return "ho";
      if (char === "-") return "hoho";
      return "";
    })
    .join(" ");

  return elfMessage;
}

console.log(elfMorse("HAPPY NEW YEAR!"));
console.log(
  "hoho hoho ho ho hoho ho ho hoho ho hoho ho hoho hoho" === elfMorse("MERRY")
);
