//Soal no 1
var word = 'javascript'
var second = 'is'
var third = 'awesome'
var fourth = 'and'
var fifth = 'i'
var sixth = 'love'
var seventh = 'it'
console.log(word.concat(second," ",third," ",fourth," ",fifth," ",sixth," ",seventh))

//Soal no 2

var sentence = "I am going to be React Native Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence[5] + sentence [6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence [12];
var fifthWord = sentence[14] + sentence [15]; 
var sixthWord = sentence[17] + sentence [18] + sentence[19] + sentence[20] + sentence[21]; 
var seventhWord = sentence[23] + sentence [24] + sentence[25] + sentence[26] + sentence[27] + sentence[28] + sentence[29]; 
var eighthWord = sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34] + sentence[35] + sentence[36] + sentence[37] + sentence[38]; 

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)

//Soal no 3 

var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2 = sentence2.substring(4, 14);  
var thirdWord2 = sentence2.substring(15, 17) ; 
var fourthWord2 = sentence2.substring(18, 20); 
var fifthWord2 = sentence2.substring(21, 25); 

console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);

//Soal no 4

var sentence3 = 'wow JavaScript is so cool';

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15,17);
var fourthWord3 = sentence3.substring(18,20);
var fifthWord3 = sentence3.substring(21,25);

var firstWordLength = exampleFirstWord3.length
var secondLength = secondWord3.length
var thirdLength = thirdWord3.length
var fourthLength = fourthWord3.length
var fifthLength = fifthWord3. length

console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondLength); 
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdLength); 
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthLength); 
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthLength); 