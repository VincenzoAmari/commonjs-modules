const hobbies = require("./hobbies");
const fullName = require("./names");

function people() {
  fullName = ("Vincenzo", "Amari");
  hobbies = ("Videogiochi", "Palestra", "Musica");

  return { fullName, hobbies };
}
