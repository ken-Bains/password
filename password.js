var lengthOfPassword,
    specialChar,
    numericNumbers,
    uppercaseLetters,
    lowercaseLetters,
    lowercaseString = "abcdefghijklmnopqrstuvwxyz",
    uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numberString = "0123456789",
    specialCharString = "!@#$%&*",
    newPasswordCreated;

document.getElementById("generateBtn").onclick = function(){
    event.preventDefault();
    lengthOfPassword = prompt("how long is your password");

    if (lengthOfPassword < 8 || lengthOfPassword > 128) {
        alert ("length of password must be from 8 to 128 chacters long");
        newPasswordCreated = "length of password must be from 8 to 128 chacters long";
    } else {
        specialChar = confirm("would you like to add special characters?");
        numericNumbers = confirm("would you like to add numeric characters?");
        uppercaseLetters = confirm("would you like to add uppercase characters?");
        lowercaseLetters = confirm("would you like to add lowercase characters?");
        createPassword();
    }

    writeToText();
};

function createPassword() {
    var newString = "";
        newPassword = "";

    if (specialChar === false && numericNumbers === false && uppercaseLetters === false && lowercaseLetters === false) {
        alert ("please pick a character type");
        newPassword = "PLEASE PICK A CHARCTER TYPE TO GENERATE PASSWORD";
        newPasswordCreated = newPassword;
        return
    }

    if (specialChar === true) {
        newString += specialCharString;
    } 
    if (numericNumbers === true) {
        newString += numberString;
    }
    if (uppercaseLetters === true) {
        newString += uppercaseString;
    }
    if (lowercaseLetters === true) {
        newString += lowercaseString;
    }

    for (var i = 1; i <= lengthOfPassword; i++) {
        var num = Math.floor(Math.random() * newString.length);
        newPassword += newString[num];
    }

    newPasswordCreated = newPassword;
};

function writeToText() {
    document.getElementById("passwordTextArea").value = newPasswordCreated;
};


document.getElementById("copyBtn").addEventListener("click", function() {
    event.preventDefault();
    textarea = document.getElementById("passwordTextArea");
    textarea.select();
    document.execCommand("copy");
});