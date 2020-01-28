// Variables for end user selections
var upperCaseElement = document.querySelector("#uppercase");  // false | true
var lowerCaseElement = document.querySelector("#lowercase");
var numberElement = document.querySelector("#numbers");
var symbolElement = document.querySelector("#symbols");
var length = document.querySelector("#length");
var generateButton = document.querySelector("#generate");
var result = document.querySelector("#result");

// Global variables
var isUpperCase = true;
var isLowerCase = true;
var isNumbers = true;
var isSymbols = true;

// Make an array for all the possible characters used to make up the password
let alphabet = "abcdefghijklmnopqrstuvyxz";
let numbers = "0123456789";
let symbols = "~`!@#$%^&*()_-+=?";

// Generate the password
generateButton.addEventListener('click', function(event) {
    console.log('Value: ', length.value);
    generateUserPassword();
});

upperCaseElement.addEventListener('change', function() {
    isUpperCase = upperCaseElement.checked;  // reset
});

lowerCaseElement.addEventListener('change', function() {
    isLowerCase = lowerCaseElement.checked;
});

numberElement.addEventListener('change', function() {
    isNumbers = numberElement.checked;
});

symbolElement.addEventListener('change', function() {
    isSymbols = symbolElement.checked;
});

let userLength = 8;  // Min Value hard coded

function copyToClipboard() {
    var textArea = document.querySelector("#result");
    textArea.select();
    document.execCommand('copy');
}

function generateUserPassword() {
    var password = '';

    for (var i = 0; i < userLength; i++) {
        var randomLetterNumber = Math.floor(Math.random() * alphabet.length); // 0
        var letter = alphabet[randomLetterNumber];
        password += letter;
    }

    if (isUpperCase === true) {
        var randomLetterNumber = Math.floor(Math.random() * alphabet.length); // 0
        var letter = alphabet[randomLetterNumber].toUpperCase();
        password += letter;
    }

    if (isNumbers === true) {
        var randomNumber = Math.floor(Math.random() * numbers.length); // 0
        var num = numbers[randomNumber];
        password += num;
    }

    if (isSymbols === true) {
        var randomSymbolNumber = Math.floor(Math.random() * symbols.length); // 0
        var symbol = symbols[randomSymbolNumber];
        password += symbol + num + letter;
        console.log(password);
        result.innerHTML = password;
    }
};
