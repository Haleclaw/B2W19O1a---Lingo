// Lingo game //


var word = words[Math.floor((Math.random() * 479) + 1)]
document.getElementById("Box0").innerHTML = word[0]
console.log(word)

function check(){
	// zorgt ervoor dat het woord in een arry komt //
	window.letter = (document.querySelector('input[class= "inputTwee"]').value).split('')

	
 
     // controleer of het goed is // wordt groen //
     for (i=0;i<word.length;i++) {
        if (letter[i] == word[i]) {
        document.getElementById("Box"+i).innerHTML = letter[i];
        document.getElementById("Box"+i).style.backgroundColor = "green"
        document.getElementById('Box'+i).style.borderRadius = '0px'
    }
     // controleer of de letter er wel in het woord zit // dan word het geel //

             else if (word.includes(letter[i])) {
       
             	 document.getElementById("Box"+i).style.backgroundColor = "yellow"
             	 document.getElementById('Box'+i).style.borderRadius = '90px'
             	 document.getElementById("Box"+i).innerHTML = letter[i];

             	
             }
                  
}	


}