// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

// 2.Group Functions
const randomFunc = {
        upper: getRandomUpper,
	lower: getRandomLower,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

// 3.Generate event listen
generateEl.addEventListener('click', () => {
        const length = +lengthEl.value;
        const hasUpper = uppercaseEl.checked;
	const hasLower = lowercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

// Generate password
function generatePassword (upper, lower, number, symbol, length) {
        // 1. Init psw variable
        // 2. Filter out uncheck types
        // 3. Loop over length and call generator function for each types
        // 4. Add a final psw to the psw var and return all

        let generatedPassword = '';

        const typesCount = upper + lower + number + symbol;
        // console.log('types Count: ', typesCount);

        const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0]);
        // console.log('types Array: ', typesArr);

        // Doesn't have a selected type
        if (typesCount === 0) {
                return 'tick at least one box';
        }

        // Create a loop
        for (let i = 0; i < length; i += typesCount) {
                typesArr.forEach(type => {
                        const funcName = Object.keys(type)[0];
                        // console.log('funcName :', funcName);
                        generatedPassword += randomFunc[funcName]();
                });
        }

        // Return final password 
        const finalPassword = generatedPassword.slice(0, length);
        return  finalPassword;
}

// Copy password to clipboard
clipboard.addEventListener('click', () => {
        // Create a textarea element
        const textarea = document.createElement('textarea');
        const password = resultEl.innerText;

        // Check if u have not psw
        if (!password) {
                return;
        }

        textarea.value = password;
        // Add textarea to the document
        document.body.appendChild(textarea);
        // Select textarea content
        textarea.select();
        // Copy textarea content
        document.execCommand('copy');
        // Remove textarea to the document
        document.body.removeChild(textarea);
        alert('Password copied to clipborad');
});

// 1. Generate functions
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
        return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}
