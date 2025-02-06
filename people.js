const hobbie = require("./hobbies");
const name = require("./names");

function people() {
  const fullName = name("Vincenzo", "Amari");
  const hobbies = hobbie("Videogiochi", "Palestra", "Musica");

  return { fullName, hobbies };
}

console.log(people());
