var codeWords = "zone";					// code letters
var inputLetters = "Hello words aaa";			// input words for code
var newCodeLetters =[];					// array new code letters
var lengthLetters;                                      // length input words
var letterFirstAlphabetAscii = 97                       // first small letter in engl alphabet
var numberLetter = 26					// letters in engl alphabet

function codeToVijiner (newCodeLetter) {
		lengthLetters = inputLetters.length;
		for (var i = 0, j = 0; i < lengthLetters; i++, j++) {
			if (codeWords.length <= j) {
				j = 0;
            		}
			var countNumberLetter =  inputLetters.toLowerCase().charCodeAt(i);
			var countCodeEncrypt = codeWords.toLowerCase().charCodeAt(j);
				if (65 <= inputLetters.charCodeAt(i) && inputLetters.charCodeAt(i) <= 90){
					inputLetters.toLowerCase();
                		}
				if ( inputLetters.charCodeAt(i) !== 32) {
					var newCodeLetter = ((countNumberLetter - letterFirstAlphabetAscii) + (countCodeEncrypt - letterFirstAlphabetAscii)) % numberLetter + 			letterFirstAlphabetAscii;
					newCodeLetters[i] = newCodeLetter;
					console.log(String.fromCharCode(newCodeLetter));
                		}
        	}
		return newCodeLetters;
}
codeToVijiner();

//function encode Vijiner
function encodeVijiner () {
		for (var i = 0, j = 0; i < lengthLetters; i++, j++) {
			if (codeWords.length <= j) {
				j = 0;
            		}
			var countNumberLetter =  newCodeLetters[i];
			if (newCodeLetters[i] == " " || newCodeLetters[i] != undefined ){
				var countCodeEncrypt = codeWords.toLowerCase().charCodeAt(j);
				var enCodeLetters =  (((countNumberLetter - letterFirstAlphabetAscii) - (countCodeEncrypt - letterFirstAlphabetAscii)) + numberLetter) % numberLetter + letterFirstAlphabetAscii; //decrypt letters in input
				console.log(String.fromCharCode(enCodeLetters));
        		}
        	}

}
encodeVijiner();
