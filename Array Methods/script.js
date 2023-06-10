let array = [1,2,3,4,5,6,7,8,9,10];

// finding length of an array
console.log(array.length);

// to iterate an array and return a new array
console.log(array.map(element => element / 2));

// to iterate an array
array.forEach(element => console.log(element));

// iterate an array and return a new array of values which satisfy the condition
console.log(array.filter(element => element >= 50));

// iterate array values and return a single value according to the operation
let newarray = array.reduce((newarray, element) => newarray + element);
console.log(newarray); 

// to reverse the array and store it to the same array
console.log(array.reverse());

// to add an element in the last position of an array
array.push(11);
console.log(array); 

// to remove the last element of an array
array.pop();
console.log(array);

// to add element in the 0th position
array.unshift(0);
console.log(array);

// to remove the 0th position element
array.shift();
console.log(array);

// to seperate one element to next with a string
console.log(array.join("-"));

// to check whether it is an array or not
console.log(Array.isArray(array)); 

// to check a certain element in an array
console.log(array.includes(5)); 

// to combines 2 or more array
let array1 = [12, 13, 14];
array=array1.concat(array);
console.log(array);

// return a given portion of an array
console.log(array.slice(0,3));

// to removing,replacing or adding data in an array
array.splice(0, 3, 1, 2, 3); 
console.log(array);

// returns the position of 1st occurance of the specified element in an array
console.log(array.indexOf(4)); 

// to check whether at least one element in an array passes a specified condition
console.log(array.some(element => element % 2 === 0));

// to check whether all elements in an array passes a specified test
console.log(array.every(element => element % 3 === 0)); 

// it returns the value of the 1st element that matches the condition
console.log(array.find(element => element % 5 === 0)); 

// it returns the position of the 1st element thwat matches the condition
console.log(array.findIndex(element => element % 10 === 0));

// it returns the last position of last occurance of the specified element in an array
console.log(array.lastIndexOf(10)); 

// it allows to iterate over the array and obtain both the index and the corresponding element in the form of an array
let iterateValue = array.entries();
console.log(iterateValue.next().value);
console.log(iterateValue.next().value);
console.log(iterateValue.next().value);

// to convert an array to string values
console.log(array.toString()); 

// to returns the array itself
console.log(array.valueOf()); 

// modifies an array by filling all or a portion of its elements with a static value
console.log(array.fill(99,0,3));