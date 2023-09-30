
const myInfo = require("./information");
const cowsay = require("cowsay");

const message = cowsay.say({
  text: `Salut, je m'appelle ${myInfo.name} et je suis à ${myInfo.campus} !`
});

console.log(message);
