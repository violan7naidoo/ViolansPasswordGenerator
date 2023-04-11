function generatePassword() {
  // Get the user's input password
  let password = document.getElementById("password").value;

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
        saferPassword += "#";
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

  // Set the output box to the safer password
  document.getElementById("output").value = saferPassword;
}

function resetForm() {
  document.getElementById("password").value = "";
  document.getElementById("output").value = "";
}
