// Variables for end user selections
var upperCaseElement = document.querySelector("#uppercase");  // false | true
var lowerCaseElement = document.querySelector("#lowercase");
var numberElement = document.querySelector("#numbers");
var symbolElement = document.querySelector("#symbols");
var length = document.querySelector("#length");
var generateButton = document.querySelector("#generate");
var result = document.querySelector("#result");
var clipboardButton = document.querySelector("#clipboard");

// Global variables
var isUpperCase = true;
var isLowerCase = true;
var isNumbers = true;
var isSymbols = true;

// Make an array for all the possible characters used to make up the password
let alphabet = "abcdefghijklmnopqrstuvyxz";
let numbers = "0123456789";
let symbols = "~`!@#$%^&*()_-+=?";

let userSelection = 4;

// Generate the password
generateButton.addEventListener('click', function(event) {
    console.log('Value: ', length.value);
    var passwordlength = length.value;
    // Short password alert, stops password from generating
    if (passwordlength < 8){
        alert('Password is too short!');
    } else {
        generateUserPassword(passwordlength);
    }
});

// This code checks to see if the user selected or deselected Uppercase letters to include them in password
upperCaseElement.addEventListener('change', function() {
    isUpperCase = upperCaseElement.checked;  // reset
    if (isUpperCase === false) {
        userSelection--;
    } else {
        userSelection++;
    }
    console.log("User Selection: ", userSelection);
});

// This code checks to see if the user selected or deselected Lowercase letters to include them in password
lowerCaseElement.addEventListener('change', function() {
    isLowerCase = lowerCaseElement.checked;
    if (isLowerCase === false) {
        userSelection--;
    } else {
        userSelection++;
    }
    console.log("User Selection: ", userSelection);
});

// This code checks to see if the user selected or deselected Numbers to include them in password
numberElement.addEventListener('change', function() {
    isNumbers = numberElement.checked;
    if (isNumbers === false) {
        userSelection--;
    } else {
        userSelection++;
    }
    console.log("User Selection: ", userSelection);
});

// This code checks to see if the user selected or deselected Symbols to include them in password
symbolElement.addEventListener('change', function() {
    isSymbols = symbolElement.checked;
    if (isSymbols === false) {
        userSelection--;
    } else {
        userSelection++;
    }
    console.log("User Selection: ", userSelection);
});

// This function grabs the password from the text area that the user inputs to save to the clipboard
function copyToClipboard() {
    var textArea = document.querySelector("#result");
    textArea.select();
    document.execCommand('copy');
}

// This code calls the function to save password
clipboardButton.addEventListener('click', function() {
    copyToClipboard();
});

// This function generates my password with the "parameters" based on what the user needs
function generateUserPassword(passwordlength) {
    var password = '';
    // This code indicates that the application should only select random letters, numbers, or symbols when buttons are selected/deselected
    for (var i = 0; i < passwordlength - userSelection; i++) {
        var randomLetterNumber = Math.floor(Math.random() * alphabet.length); // 0
        var letter = alphabet[randomLetterNumber];
        // Lowercase letters
        if (isLowerCase === true) {
            password += letter;
        } else {
            // Uppercase letters
            password += letter.toUpperCase();
        }
    }

    if (isUpperCase === true) {
        var randomLetterNumber = Math.floor(Math.random() * alphabet.length); // 0
        var letter = alphabet[randomLetterNumber].toUpperCase();
        password += letter;
    }

    if (isNumbers === true) {
        var randomNumber = Math.floor(Math.random() * numbers.length); // 0
        var num = numbers[randomNumber];
        console.log('Number: ', randomNumber);
        password += num;
    }

    if (isSymbols === true) {
        var randomSymbolNumber = Math.floor(Math.random() * symbols.length); // 0
        var symbol = symbols[randomSymbolNumber];
        password += symbol;
        console.log(password);
        // Tells the code to print password
        result.innerHTML = password;
    }
};
