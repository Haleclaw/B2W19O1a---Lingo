// Lingo game //




function check(){
	window.letter = (document.querySelector('input[class= "inputTwee"]').value).split('')
	window.word = (document.querySelector('input[class="input"]').value).split('')
	
 

     for (i=0;i<word.length;i++) {
        if (letter == word[i]) {
        document.getElementById("Box"+i).innerHTML = letter[0];
      
    }
}
	


}