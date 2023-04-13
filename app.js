function generatePassword() {
  // Get the user's input password
  let password = document.getElementById("password").value;

  //first letter to upper case
  password = password.charAt(0).toUpperCase() + password.slice(1);

  // Generate a safer password using some algorithm
  let saferPassword = "";

  for (let i = 0; i < password.length; i++) {
    switch (password[i]) {
      case "a":
      case "A":
        saferPassword += "@";
        break;
      case "e":
      case "E":
        saferPassword += "3";
        break;
      case "s":
      case "S":
        saferPassword += "$";
        break;
      case "i":
      case "I":
        saferPassword += "!";
        break;
      case "o":
      case "O":
        saferPassword += 0;
        break;
      case " ":
        saferPassword += "_";
        break;
      // add more cases for other letters
      default:
        saferPassword += password[i];
        break;
    }
  }

  // Add one or two random numbers to the end of the password
  const randomNumber = Math.floor(Math.random() * 10);
  saferPassword += randomNumber;
  if (randomNumber < 5) {
    saferPassword += Math.floor(Math.random() * 10);
  }

  // Set the output box to the safer password
  document.getElementById("output").value = saferPassword;
}

function copyToClipboard() {
  const passwordOutput = document.getElementById("output");
  passwordOutput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

function resetForm() {
  document.getElementById("password").value = "";
  document.getElementById("output").value = "";
}
