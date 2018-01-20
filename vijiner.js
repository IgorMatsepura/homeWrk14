var codeWords = "zone";
var inputLetters = "Hello words aaa";


function codeToVijiner (newCodeLetter) {
		var newCodeLetter =[];
		for (var i = 0, j = 0; i < inputLetters.length; i++, j++) {
			if (codeWords.length <= j) {
				j = 0;
            }
			var countNumberLetter =  inputLetters.toLowerCase().charCodeAt(i);
			var countCodeEncrypt = codeWords.toLowerCase().charCodeAt(j);
				if (65 <= inputLetters.charCodeAt(i) && inputLetters.charCodeAt(i) <= 90){
					inputLetters[i].toLowerCase();
					//console.log(inputLetters[i].toLowerCase());
                }
				if ( inputLetters.charCodeAt(i) !== 32) {
					newCodeLetter =  ((countNumberLetter - 97) + (countCodeEncrypt - 97)) % 26 + 97;
					console.log(String.fromCharCode(newCodeLetter));
					//console.log(countNumberLetter +" "+ countCodeEncrypt +" NEW LETT " + newCodeLetter +" "+ String.fromCharCode(newCodeLetter));
					//console.log(newCodeLetter);
                }
        }
		console.log(inputLetters.length);
		console.log(codeWords.length);
		return newCodeLetter;
}
codeToVijiner();

function encodeVijiner () {
		for (var i = 0, j = 0; i < newCodeLetter.length; i++, j++) {
			if (codeWords.length <= j) {
				j = 0;
            }
			console.log(newCodeLetter);
			var countNumberLetter =  newCodeLetter.toLowerCase().charCodeAt(i);
			var countCodeEncrypt = codeWords.toLowerCase().charCodeAt(j);
				if ( newCodeLetter.charCodeAt(i) !== 32) {
					var enCodeLetter =  ((countNumberLetter - 97) + (countCodeEncrypt - 97)) % 26 - 97;
				//	console.log(countNumberLetter +" "+ countCodeEncrypt +" ENCRYPTLETT " + enCodeLetter +" "+String.fromCharCode(enCodeLetter));
                }
        }
		
}
encodeVijiner();	