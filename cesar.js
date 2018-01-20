// function code to Cesar
var arr = new Array();
arr = "aac";
var number = 2;
function codeToCesar () {
 for ( var i = 0; i < arr.length ; i++ ) {
 	var numberLetter = arr[i].charCodeAt(arr[i])+number;
  	console.log( String.fromCharCode(numberLetter));
  }
}
codeToCesar ();

// function encode to Cesar
function encodeFromCesar(){
  for ( var i = 0; i < arr.length ; i++ ) {
  	var numberLetter = arr[i].charCodeAt(arr[i])+number;
  	var numberLetters = numberLetter - number;
  	console.log( String.fromCharCode(numberLetters));
   }
}
encodeFromCesar();