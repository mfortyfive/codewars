// encrypts message using rot13. keeps capitalization.

function rot13(message) {
  let encryptMessage = "";
  for (let i = 0; i < message.length; i++) {
    const encryptCode = message.charCodeAt(i);
    if (65 <= encryptCode && encryptCode <= 90) {
      encryptMessage += String.fromCharCode(((encryptCode - 52) % 26) + 65);
    } else if (97 <= encryptCode && encryptCode <= 122) {
      encryptMessage += String.fromCharCode(((encryptCode - 84) % 26) + 97);
    } else {
      encryptMessage += message[i];
    }
  }
  return encryptMessage;
}

const test = "Top Secret";

console.log("input:", test);
console.log("result:", rot13(test));

// returns 'Gbc Frperg'
