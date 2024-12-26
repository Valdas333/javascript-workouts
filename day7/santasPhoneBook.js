const output = formatPhoneNumber("8005551212");
const output2 = formatPhoneNumberOVP("8005551212");

function formatPhoneNumber(phoneNumberString) {
  const formated = `(${phoneNumberString.slice(
    0,
    3
  )}) ${phoneNumberString.slice(3, 6)}-${phoneNumberString.slice(6, 10)} `;
  return formated;
}

function formatPhoneNumberOVP(phoneNumberString) {
  phoneNumberString = phoneNumberString
    .replace(/^/, "(")
    .replace(/^(.{4})/, "$1) ")
    .replace(/^(.{9})/, "$1-");
  return phoneNumberString;
}
console.log(output);
console.log(output2);
