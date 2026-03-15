const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// need to generate two random passwords, each 15 characters long
// need to place them into the divs on the page using textContent

/*
generate a randomNumber
*/

//const tester = ["a", "b", "c", "d", "e", "f", "g", "h"]

// get the index from 0 through last index

//console.log(Math.floor(Math.random() * tester.length));

/*
function getIndex() {
    return Math.floor(Math.random() * tester.length);
}
*/

function getIndex() {
    return Math.floor(Math.random() * characters.length);
}

/*
function makePassword() {
    return Math.floor(Math.random() * characters.length)
} */

function generatePassword() {
    let holderArray = [];
    for (let i = 1; i < 16; i++) {
        //console.log(i);
        holderArray.push(characters[getIndex()]);
        //console.log(holderArray);
    }
    return holderArray.join("");
}

// console.log(generatePassword())

const handleClick = document.querySelector(".btn-generator");
const passwordOne = document.getElementById("password-one");
const passwordTwo = document.getElementById("password-two");

handleClick.addEventListener("click", () => {
    passwordOne.textContent = generatePassword();
    passwordTwo.textContent = generatePassword();
});

// console.log(tester[getIndex()]);

/*
let holderArray = [];
for (let i = 0; i < tester.length; i++) {
    console.log(i)
    holderArray.push(tester[getIndex()])
    console.log(holderArray)
}

console.log(holderArray.join(""))
*/