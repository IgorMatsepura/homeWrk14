var codeWords = "zone";					//code letters
var inputLetters = "Hello words aaa";			// input words for code
var newCodeLetters =[];					// array new code letters
var lengthLetters;

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
					var newCodeLetter = ((countNumberLetter - 97) + (countCodeEncrypt - 97)) % 26 + 97;
					newCodeLetters[i] = newCodeLetter;
					console.log(String.fromCharCode(newCodeLetter));
                		}
        	}
		return newCodeLetters;
}
codeToVijiner();


function encodeVijiner () {
		for (var i = 0, j = 0; i < lengthLetters; i++, j++) {
			if (codeWords.length <= j) {
				j = 0;
            		}
			var countNumberLetter =  newCodeLetters[i];
			var countCodeEncrypt = codeWords.toLowerCase().charCodeAt(j);
					var enCodeLetters =  ((countNumberLetter - 97) + (countCodeEncrypt - 97)) % 26 + 97;
					console.log(String.fromCharCode(enCodeLetters));
        	}

}
encodeVijiner();	
