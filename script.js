    var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var lowerCase = "abcdefghijklmnopqrstuvwxyz";

	var numeric = "0123456789";

	var symbols = "~!()*@&#^$%<>{}[]/;:?+";

	var securePassword = ""; 

	var generateBtn = document.querySelector("#generate"); 

	function generatePassword() {

	window.alert("Welcome to the Secure Password Generator Application");
	
	var lenSelect = function() //called function to choose total length for password
	{
	var totalCharacters = window.prompt("Please select a length for your password. It need to be atleast 8 characters and no more then 128 characters");
	
	if (totalCharacters === "" || totalCharacters < 8 || totalCharacters > 128) {

	alert("Invalid Entry!. Please try again.");
	lenSelect();

	} 

	return totalCharacters;

	};
	
	
	var charTypeSelect = function() //called function to choose all different type of characters for random password

	{

	var upper = window.prompt("Would you like to add any Uppercase characters?");

	if (upper === "YES" ||upper ==="yes" || upperCase === "Yes" ) // Try to add some strings for the different type of possible outcomes for "yes
	 
	{
 
	securePassword += upperCase; 

	} 

	var lower = window.prompt("Would you like to add any Lowercase characters?");

	if (lower ===  "YES" || lower ==="yes" || lowerCase === "Yes" ) // Try to add some strings for the different type of possible outcomes for "yes
	
	{

	securePassword += lowerCase; 
	
	} 
	
	var num = window.prompt("Would you like to add any Numeric characters?");

	if (num === "YES"  || num ==="yes" || num === "Yes" ) // Try to add some strings for the different type of possible outcomes for "yes
	
	{

	securePassword += numeric;

	} 
	
	var spec = window.prompt("Would you like to add any Symbols? eg. ~!()*@&#^$%<>{}[]/;:?+");
	if (spec === "YES" || spec=== "yes" || symbols === "Yes" ) // Try to add some strings for the different type of possible outcomes for "yes
	
	{

	securePassword += symbols; 

	} 
	
	if (securePassword === "") {

	window.alert("You must select atleast one options from character types. Please try again.");
	charTypeSelect();

	}
	
	return securePassword; 

	};
	
	var passwordLength = lenSelect(); 
	
	charTypeSelect(); 
	
	var password = "";

	for (var i = 0; i < passwordLength; i++) // Creating password of certain length, using different amount and type of random characters 
	
	{

	password += securePassword.charAt(Math.floor(Math.random() * securePassword.length));

	}
	
	return password;

	};
	
	// Write password to the #password input
	function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	
	passwordText.value = password;
	};
	
	// Add event listener to generate button
	generateBtn.addEventListener("click", writePassword);
