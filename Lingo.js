// Lingo game //

var x = 0
var eind = false
var word = words[Math.floor((Math.random() * 479) + 1)]
document.getElementById("Box"+x+"0").innerHTML = word[0]
console.log(word)

function check(){
	// zorgt ervoor dat het woord in een arry komt //
	window.letter = (document.querySelector('input[class= "inputTwee"]').value).split('')

	
 
     // controleer of het goed is // wordt groen //
     for (i=0;i<word.length;i++) {
        if (letter[i] == word[i]) {
        document.getElementById("Box"+x+i).innerHTML = letter[i];
        document.getElementById("Box"+x+i).style.backgroundColor = "green"
        document.getElementById('Box'+x+i).style.borderRadius = '0px'
    }
     // controleer of de letter er wel in het woord zit // dan word het geel //

             else if (word.includes(letter[i])) {
       
             	 document.getElementById("Box"+x+i).style.backgroundColor = "yellow"
             	 document.getElementById('Box'+x+i).style.borderRadius = '90px'
             	 document.getElementById("Box"+x+i).innerHTML = letter[i];

             	
             }
                  
}	
x++
if( x == 5){
	eind = true
}
if( eind == true){
	gewonnen()
}

}
function gewonnen(){
	document.getElementById("button1").disabled = true; 
}
function restart(){
	location.reload()
}