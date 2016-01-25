/*
Project Name: volatile translator
Author: Federico Rabinovich
Description: Just a simple plain Javascript app for translating. No real world usagge.
Version: 1.0
Date: 01/12/15
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

*/
(function(){
  
  
	//bootstraped words
	var wordsSource = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
	var wordsDest = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'];
	  
	  
	//function to add already known words to list
	function addToList(source, dest){
		var li = document.createElement('li');
		li.innerHTML = source+' -> '+dest;
		document.getElementById('known-translations').appendChild(li);
	};

	//function to add words
	document.getElementById('learn-translate').addEventListener('click', function(){ 
		source = document.getElementById('source-word').value;
		dest = document.getElementById('translation-word').value;
		wordsSource.push(source);
		wordsDest.push(dest);
		addToList(source, dest);
	});

	//translating function 
	function lookForWord(wordToLookFor){
		pos = wordsSource.indexOf(wordToLookFor);
		if (pos>-1)	wordToLookFor = wordsDest[pos];
		document.getElementById('translation-result').innerHTML += wordToLookFor+" ";
	}

	//listen to keydown events
	document.getElementById('translate-box').addEventListener('keydown', function(e){ 
		document.getElementById('translation-result').innerHTML='';
		string = document.getElementById('translate-box').value;
		stringArray = string.split(" ");			
		wordCount = stringArray.length;
		for(word = 0; word<wordCount; word++){
			lookForWord(stringArray[word]);
		}
	});

	// add bootstraped words to already known words
	for(var word = 0; word<wordsSource.length; word++){
		addToList(wordsSource[word], wordsDest[word]);
	}

  })();
