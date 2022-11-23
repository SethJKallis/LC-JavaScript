let sentence = " This is a random sentence for the string example "

// .length RETURNS THE LENGTH OF THE STRING AS A NUMBER
console.log(sentence.length)
// OUTPUT = 48
console.log('----------')


// .match() MATCHES A STRING AGAINST A REGULAR EXPRESSION
// RETURNS AN ARRAY WITH THE MATCHES
// RETURNS NULL IF NO MATCHES
// IF THE SEARCH VALUE IS A STRING< IT GETS CONVERTED TO A REGULAR EXPRESSION
console.log(sentence.match('This'))
console.log(sentence.match(/random/))


// .repeat() RETURNS A STRING WITH A NUMBER OF COPIES OF A STRING
// RETURNS A NEW STRING
// DOES NOT CHANGE THE ORIGINAL STRING
console.log(sentence.repeat(2))
console.log('----------')


// .replace() SEARCHES A STRING FOR A VALUE OR A REGULAR EXPRESSION
// RETURNS A NEW STRING WITH THE VALUES REPLACED
// DOES NOT CHANGE THE ORIGINAL STRING
console.log(sentence.replace('a',"my"))
console.log(sentence.replace(/a/, 'my'))
console.log('----------')


// .search() MATCHES A STRING AGAINST A REGULAR EXPRESSION
// RETURNS THE INDEX OF THE FIRST MATCH
// RETURNS -1 IF NO MATCH IS FOUND
// IS CASE SENSITIVE
console.log(sentence.search('This'))
console.log(sentence.search(/This/))
console.log(sentence.search(/string/))
console.log(sentence.search(/String/))
console.log('----------')


// .slice() RETURNS SELECTED ELEMENTS IN AN ARRAY, AS A NEW STRING
// SELECTS FROM A GIVEN START, UP TO A GIVEN END(NOT INCLUSIVE OF THE END)
// DOES NOT CHANGE THE ORIGINAL STRING
console.log(sentence.slice(0, 40))
console.log(sentence.slice(10, 48))
console.log('----------')


// .split() SPLITS A STRING INTO AN ARRAY OF SUBSTRINGS
// RETURNS THE NEW ARRAY
// DOES NOT CHANGE THE ORIGINAL STRING
// IF (" ") IS USED AS A SEPARATOR, THE STRING IS SPLIT BETWEEN WORDS
console.log(sentence.split(""))
console.log(sentence.split(" "))
console.log(sentence.split("  "))
console.log('----------')


// .startsWith() RETURNS "TRUE" IF A STRING STARTS WITH A SPECIFIC STRING
// OTHERWISE, IT RETURNS "FALSE"
// IS CASE SENSITIVE
console.log(sentence.startsWith('This'))
console.log(sentence.startsWith('random', 10))
console.log(sentence.startsWith('random', 5))
console.log('----------')


// .substring() EXTRACTS A PART OF A STRING
// BEGINS AT A SPECIFIC POSITION, AND RETURNS A SPECIFIC NUMBER OF CHARACTERS
// DOES NOT CHANGE THE ORIGINAL STRING
// TO EXTRACT CHARACTERS FROM THE END OF A STRING, USE A NEGATIVE START POSITION
console.log(sentence.substr(0 , 25))
console.log(sentence.substr(0))
console.log('----------')


// .substring() EXTRACTS CHARACTERS, BETWEEN TWO INDICES(POSITION), FROM A STRING, AND RETURNS THE SUBSTRING
// EXTRACTS CHARACTERS FORM START TO END(EXCLUSIVE)
// DOES NOT CHANGE THE ORIGINAL STRING
// IF START IS GREATER THAN END, ARGUMENTS ARE SWAPPED: (4, 1) = (1, 4)
// START OR END VALUES LESS THAN 0 ARE TREATED AS 0
console.log(sentence.substring(0, 10))
console.log(sentence.substring(-1000000))
console.log('----------')


// .toLowerCase() CONVERTS A STRING TO LOWER CASE LETTERS
// DOES NOT CHANGE THE ORIGINAL STRING
let fruit = ("b" + "a" + + "a" + "a")
console.log(fruit.toLowerCase())
console.log('----------')


// .toUpperCase() CONVERTS A STRING TO UPPER CASE LETTERS
// DOES NOT CHANGE THE ORIGINAL STRING
console.log(fruit.toUpperCase())
console.log('----------')


// .toString() RETURNS A STRING AS A STRING
// DOES NOT CHANGE THE ORIGINAL STRING
// CAN BE USED TO CONVERT A STRING OBJECT INTO A STRING
console.log(fruit.toString())
console.log('----------')


// .trim() REMOVES WHITESPACE FROM BOTH SIDES OF A STRING
// DOES NOT CHANGE THE ORIGINAL STRING
console.log(sentence.trim())
console.log('----------')


// .trimEnd() REMOVES WHITESPACE FROM THE END OF A STRING
// DOES NOT CHANGE THE ORIGINAL STRING
// WORKS LIKE trim(), BUT REMOVES WHITESPACE ONLY FROM THE END OF A STRING
console.log(sentence.trimEnd())
console.log('----------')


// .trimStart() REMOVES WHITESPACE FROM THE BEGINNING OF A STRING
// DOES NOT CHANGE THE ORIGINAL STRING
// WORKS LIKE trim(), BUT REMOVES WHITESPACE ONLY FROM THE START OF A STRING
console.log(sentence.trimStart())
console.log('----------')


// .valueOf() RETURNS THE PRIMITIVE VALUE OF A STRING
// DOES NOT CHANGE THE ORIGINAL STRING
// CAN BE USED TO CONVERT A STRING OBJECT INTO A STRING
// NOTE** .valueOf() IS THE DEFAULT METHOD FOR JAVASCRIPT STRINGS
let person = {
    name: `Seth`,
    surname: `Kallis`,
    age: 22
}
console.log(sentence.valueOf())
console.log(person.valueOf())
console.log('----------')
