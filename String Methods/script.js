let greeting = "Good,morning";

// finding the length of string
console.log(greeting.length);

// convert a string to lowercase
console.log(greeting.toLowerCase()); 

// convert a string to uppercase
console.log(greeting.toUpperCase()); 

// to check the substing in a string
console.log(greeting.includes("d")); 

// checks whether a string starts with a specified substring
console.log(greeting.startsWith("M")); 

// checks whether a string ends with a specified substring
console.log(greeting.endsWith("d")); 

// it searches for a specified substring within a string and returns the index of the first occurrence of the substring
console.log(greeting.search("o")); 

// searches a string for a specified pattern and returns an array of the matched substrings
console.log(greeting.match(/Good/)); 

// Returns the position of the first occurrence of a substring
console.log(greeting.indexOf("m")); 

// returns the position of the last occurence of a substring
console.log(greeting.lastIndexOf("d")); 

// used to replace occurrences of a specified substring or pattern within a string with a new substring
console.log(greeting.replace("morning","Morning")); 

// used to remove the white space of a string
let x = "  a,b,c  ";
console.log(x.trim()); 

// Returns the character at the specified position
console.log(greeting.charAt(7)); 

// Returns the Unicode value of the character at the specified location
console.log(greeting.charCodeAt(7)); 

// converts Unicode values to their corresponding characters and returns a new string
let a=10,b=11,c=12,d=13;
x = String.fromCharCode(a, b, c, d);
console.log(x);

// combining 2 or more strings
console.log(x.concat(",", greeting)); 

// used to split a string into an array of substrings based on a specified separator
console.log(greeting.split(",")); 

// used to create a new string by repeating the original string a specified number of times
console.log(greeting.repeat(3)); 

// used to extract a portion of a string and return it as a new string
console.log(greeting.slice(0, 5)); 

// used to extract a portion of a string starting from a specified index position and returning it as a new string. It takes two parameters: the starting index position and the length of the substring to be extracted
console.log(greeting.substr(5, 6)); 

// used to extract a portion of a string and return it as a new string. It takes two parameters: the starting index position and the optional ending index position
console.log(greeting.substring(5, 11)); 

// used to convert a value to its string representation
a=[44,55,66];
console.log(x.toString()); 

// used to return the primitive value of a number
a=new String("a,b,c");
console.log(x.valueOf());