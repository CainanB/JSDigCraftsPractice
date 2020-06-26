const numArray = [1,3,-5,-4,-2,18,3,-6,-9,-25,10,23,24,-30];

//POSITIVE NUMBERS
function positiveNums(arr){
    var positiveNumsArray = arr.filter(num => num >= 0);
    return positiveNumsArray;
}
console.log(positiveNums(numArray));

// EVEN NUMBERS
function evenNums(arr){
    var evenNumsArray = arr.filter(num => num % 2 == 0);
    return evenNumsArray;
}
console.log(evenNums(numArray));

//SQUARE THE NUMBERS
function squareNum(arr){
    var squaredNums = arr.map(num => num * num);
    return squaredNums;
}

console.log(squareNum(numArray));

// CITIES 1

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

function tempUnder70(arr){
    var citiesUnder70 = arr.filter(city => city.temperature < 70);
    return citiesUnder70;
}
console.log(tempUnder70(cities));


// CITIES 2
function getCityNames(arr){
    var cityNames = arr.map(city => city.name);
    return cityNames;
}

console.log(getCityNames(cities));


//GOOD JOB

var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 
'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 
'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

people.map(name => console.log(`Good job, ${name}!`));

// Sort an Array

console.log(people.sort());

// Sort an Array 2

console.log(people.sort((a,b) => a.length - b.length));

// Sort an Array 3

var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6],
    [2,3] ];


arr.sort(function(a,b){
        var sumA = a.reduce((total,value) => total + value);
        var sumB = b.reduce((total,value) => total + value);

        return sumA - sumB;
});

console.log(arr);

// 3 times

function call3Times(fun) { fun(); fun(); fun(); }
call3Times(() => console.log("Hello World!"));

// n times


function callNTimes(numTimes, fun){
    for(let i = 0; i < numTimes;i ++){
        fun();
    }

}
function hello(){
    console.log("Hello World!");
}
callNTimes(5, hello)

// sum an array

let numbersArr = [2,3,5,6];

console.log(numbersArr.reduce((total,value) => total + value));


// Acronym

var vip = ['very', 'important', 'person'];
var nasa = ['national', 'aeronautics', 'space', 'administration'];


function acronym(arr){
    return arr.reduce((total,value) => total + value[0],"" )
}
console.log(acronym(nasa));

// Bonus For Each
var arr = [
    { name: 'Bob' },
    { name:'Alice' },
    { name:'Joe' } ];

function forEach(nameArr, fun){
    nameArr.map(fun);
}

forEach(arr, function(person) {
       console.log('Hello, ' + person.name + '!');
});

// Bonus Custom Map function

function map(arr, fun){
    newArray = arr.map(fun)
    return newArray;

}

console.log(map([2,3,5,6,8], function(value){
    return value + 5;
}));

// Bonus Caser Cipher
function cipher(text){ 
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''); 
    var textArr = text.split('');

    var cipheredArr = textArr.map(function(value){
        var idx = alphabet.indexOf(value.toUpperCase());
        var newIdx = idx + 13;
        if (newIdx >= alphabet.length) {
            newIdx -= 26;
        }
        return alphabet[newIdx];
    });
    return cipheredArr;
}

// You can assume that the text is only one word, all letters are capitalized, and the offset is always 13 var encrypted = cipher('GENIUS');

encrypted = cipher('GENIUS');
console.log(encrypted);





