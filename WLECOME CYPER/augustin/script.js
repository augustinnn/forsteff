const charToNum = {'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15, 'g': 16, 'h': 17, 'i': 18, 'j': 19, 'k': 20, 'l': 21, 'm': 22, 'n': 23, 'o': 24, 'p': 25, 'q': 26, 'r': 27, 's': 28, 't': 29, 'u': 30, 'v': 31, 'w': 32, 'x': 33, 'y': 34, 'z': 36, ' ': 37};

function charsToNums(inputStr) {
    let nums = '';
    for (let char of inputStr) {
        if (char.toLowerCase() in charToNum) {
            nums += charToNum[char.toLowerCase()];
        } else {
            nums += char;
        }
    }
    return nums;
}

function convertCharsToNums() {
    const inputChars = document.getElementById('inputChars').value;
    const convertedNums = charsToNums(inputChars);
    document.getElementById('output').innerText = 'Encyption: ' + convertedNums;
}

// here another function must be addedd as decription VICTOR 
// up you see how encryption is made 