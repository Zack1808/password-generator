// Function that will return a random letter
const randomLetter = () => {
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
};

// Function that will return a random number
const randomNumber = () => {
  let charset = "0123456789";
  let randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
};

// Function that will return a random symbol
const randomSymbol = () => {
  let charset = "[]{}!?|-_*#/()&%$";
  let randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
};

// Function that will generate the password
export const generatePassword = (
  hasNubers = false,
  hasSymbols = false,
  len = 6
) => {
  let functionSet = [randomLetter];

  functionSet = hasNubers ? [...functionSet, randomNumber] : functionSet;
  functionSet = hasSymbols ? [...functionSet, randomSymbol] : functionSet;

  let passowrd = [];
  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor(Math.random() * functionSet.length);
    let character = functionSet[randomIndex]();
    passowrd.push(character);
  }

  return passowrd.join("");
};
