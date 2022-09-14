const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

firstInput = document.getElementById('fpassword');
secondInput = document.getElementById('spassword')

function generatePassword() {
    let firstPassword = [];
    let secondPassword = [];

    for (let i = 0; i < 16; i++) {
        firstPassword.push(characters[Math.floor(Math.random() * (characters.length))])
        firstInput.value = firstPassword;
    }
    for (let j = 0; j < 16; j++) {
        secondPassword.push(characters[Math.floor(Math.random() * (characters.length))])
        secondInput.value = secondPassword;
    }

}

function copyFirstPassword() {
    let copyText = document.querySelector("#fpassword");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector("#fpasswordcopy").addEventListener("click", copyFirstPassword);

function copySecondPassword() {
    let copyText = document.querySelector("#spassword");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector("#spasswordcopy").addEventListener("click", copySecondPassword);