const letters = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var word = "welcome to digital crafts"; 


// // CAESAR CIPHER

function cipher(message, offset){
    let cipheredMessage = "";
    
    for(char of message){
        if(char == " "){
            cipheredMessage += " ";
        }else{
            let newLetterIndex = letters.indexOf(char) + offset;
            if(newLetterIndex > 25){
                newLetterIndex -= 26;
            }
            cipheredMessage += letters[newLetterIndex];
        }
    }
    return cipheredMessage;
}
console.log(cipher(word, 2));

//CAESAR DECIPHER
function decipher(message, offset){
    let decipheredMessage = "";
    
    for(char of message){
        if(char == " "){
            decipheredMessage += " ";
        }else{
            let newLetterIndex = letters.indexOf(char) - offset;
            if(newLetterIndex < 0){
                newLetterIndex += 26;
            }
            decipheredMessage += letters[newLetterIndex];
        }
    }
    return decipheredMessage;
}

console.log(decipher("ygneqog vq fkikvcn etchvu",2));

// RETURN POSITIVE NUMBERS FUNCTION

// function positiveNumbers(numArray){
//     var positiveArray = [];
//     for(num of numArray){
//         if(num >= 0){
//             positiveArray.push(num);
//         } 
//     }
//     return positiveArray
// }

// console.log(positiveNumbers([1,-3,5,-3,0]));

// LONG VOWELS

// function longVowels(word){
//     var newWord = word;
//     const longVowels = ["aa","ee","ii","oo","uu"];
//     for(longVowel of longVowels){
//         if(word.includes(longVowel)){
//             var splitVowels = longVowel.split("");
//             var singleVowel = splitVowels[0];
//             newWord = word.replace(longVowel, longVowel + longVowel + singleVowel);
//         }
//     }
//     return newWord;
// }

// console.log(longVowels("cheese"));

//LEETSPEAK

// const leetspeaknums = {
//     a : 4,
//     e : 3,
//     g : 6,
//     l : 1,
//     o : 0,
//     s : 5,
//     t : 7
// }

// function leetspeak(word){
//     let convertedWord = "";
//     for(letter of word){
//         if(leetspeaknums[letter] != undefined){
//             convertedWord += leetspeaknums[letter];
//         }else{
//             convertedWord += letter;
//         }
//     }
//     return convertedWord;
// }

// console.log(leetspeak("leek"));

