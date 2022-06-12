// Arrays for upperCase, lowerCase, numbers, and specialCharacters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "~", "`", "|", "}", "{", "]", "[", ":", ";", "'", '"', ",", ".", "<", ">", "/", "?", "\\"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
	// Prompt user for password length
	var passwordLength = prompt("How many characters would you like your password to be? (8-128)");

	// Check password length is between 8 and 128 characters
	while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
		passwordLength = prompt("Please enter a number between 8 and 128.");
	}

	// Prompt user for password parameters
	var includeUpper = confirm("Would you like to include uppercase letters?");
	var includeLower = confirm("Would you like to include lowercase letters?");
	var includeNumbers = confirm("Would you like to include numbers?");
	var includeSpecial = confirm("Would you like to include special characters?");

	// Ensure user has selected at least one parameter
	while (!includeUpper && !includeLower && !includeNumbers && !includeSpecial) {
		includeUpper = confirm("Please select at least one criteria.");
	}

	// Create an array of all selected parameters
	var passwordChoices = [];
	if (includeUpper) {
		passwordChoices = passwordChoices.concat(upperCase);
	}
	if (includeLower) {
		passwordChoices = passwordChoices.concat(lowerCase);
	}
	if (includeNumbers) {
		passwordChoices = passwordChoices.concat(numbers);
	}
	if (includeSpecial) {
		passwordChoices = passwordChoices.concat(specialCharacters);
	}

	// Generate the password
	var password = "";
	for (var i = 0; i < passwordLength; i++) {
		password += passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
	}

	return password;
}
