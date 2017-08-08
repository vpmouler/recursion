// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
/*
var stringifyJSON = function(obj) {
	//loop until string is complete
	//maybe start string w/ {}, then push add to middle
	//stop when index is }
	// lets start w/ assuming it's only object, not array and can end when we reach "}"
	var string = '';
	var count = 0;
	for (var key in obj) { // have to check if obj[key] is typeof number, then no ""
		if ( Object.keys(obj)[Object.keys(obj).length-1] == key) {
			string = string + '"' + key + '":"' + obj[key] + '"';
		} else {
		  string = string + '"' + key + '":"' + obj[key] + '",';
		}
	}
	return '{' + string + '}';
	// var count = 0;
	// while ( count < 100 ) {

};
*/
// var obj = { foo: 'bar', baz: 42 };
// // console.log(Object.keys(obj)); // ['bar', 42]

// var object = {seva: "seva", age: 123, sex: "male"}
// // console.log(Object.values(object))
// console.log(JSON.stringify(object)) // have to check whether obj[key] is typeof number, then no ""
// console.log(stringifyJSON(object))
// // console.log(Object.keys(object).length)
// // console.log(object[0])

// var string1 = "Seva";
// string1[0] = "b";
// // console.log(string1[0])

//using loop to make number a string
function loopNumber(number) {
	return number.toString();
}

// console.log(typeof loopNumber(123)) // string

// using loop to stringify array

function loopArray(array) {
	var string = '';
	for (var i = 0; i < array.length; i++ ) {
		string += array[i].toString();
		if (!(i == array.length - 1)) {
			string += ',';
		}
	}
	return '[' + string + ']';
}

// console.log(loopArray([1,2,"seva"])) //[1,2,seva]
// console.log(typeof loopArray([1,2,"seva"]))  // string

//using recurion

function recursionArray(array) {
	//base case
	if ( array.length == 0 ) {
		return '['+array+']';
	}
	else {
		recursionArray()
	}
}

/*
console.log(JSON.stringify('seva'))// "seva"
console.log('seva'); //seva

console.log(JSON.stringify(23)) // 23
console.log(23) // 23

console.log(JSON.stringify([1,2,'seva'])) //[1,2,"seva"]
console.log([1,2,'seva']) //[ 1, 2, 'seva' ]

console.log(JSON.stringify({name: 'seva', age: 25, 'sex': 'male'})) // {"name":"seva","age":25,"sex":"male"}
console.log({name: 'seva', age: 25, 'sex': 'male'}) // { name: 'seva', age: 25, sex: 'male' }
*/
/*
function objectStringify(obj) {
	var string = '';
	for ( var key in obj ) {
		console.log(typeof key, typeof obj[key]);
		string += '"' + key + '":"' + obj[key] + '",';
	}
	return '{' + string + '}';
};

var object = {name: 'seva', age: 25, 'sex': 'male'}
console.log(objectStringify({name: 'seva', age: 25, 'sex': 'male'}));

function objectStringifyRecursion(obj) {
	var string = '';
	//base case
		// if return call is not a string or number
		// then return empty string ""
	var recurisveLoopObject = function (strOrNum) {
		if ( obj !== typeof string || obj !== typeof number ) { // check if type is array/obj in case there are nested
			return '';
		} else {
	//recurisve case
			return recurisveLoopObject() // find object methods
		}
	}

}

// console.log(Object.entries(object));
var obj = { foo: 'bar', baz: 42 };
// console.log(Object.entries(obj)); // ERROR
console.log(typeof Object.getOwnPropertyNames(obj));
console.log(typeof Object.keys(obj)[0]); // stirng [0]
*/

var array = ["seva","peter","bert"]; // recursively add to a new stirng

function recursiveArrToStr(array) {
	//base case
		// array.length == 0
	if ( array.length === 0 ) {
		return '';
	}
	// recursive case
	return array[0] + recursiveArrToStr(array.slice(1))
}

console.log(JSON.stringify(array))
console.log(recursiveArrToStr(array));


var objectMe = {name: 'seva', age: 25, 'sex': {butt:23}};
/*
function recursiveObjToStr(obj) {
	var objectKeys = Object.keys(obj);
	var recursion = function(arr) {
	// base case
		if ( arr.length === 0 ) {
			return '';
		}
		return arr[0] + obj[arr[0]] + recursiveObjToStr(objectKeys.slice(1));
	}
	return recursion(objectKeys);
}
*/

function recursiveObjToStr(obj) {
	var objectKeys = Object.keys(obj);
	var emptyString = '';
	objectKeys.forEach(function(element, index) {
		emptyString += '"' + objectKeys[index] + '":"' + obj[objectKeys[index]] + '"'
	});
	// base case
	return '{' + emptyString + '}';
}

console.log(recursiveObjToStr(objectMe))

var nestedArray = [undefined,2,['seva','bert',[123]], true];

console.log(recursiveArrToStr(nestedArray));

function stringifyJSON(obj) {
	var emptyString = '';
	var ifArray = [];
	var ifObject = [];
	if ( typeof obj === 'number') { // why add space '' allows null?
		return obj;
	}
	if ( typeof obj === 'string' ) {
		return '"' + obj + '"';
	}
	if ( obj === null || obj === undefined) {
		return 'null';
	}
	if ( obj === true ) {
		return 'true';
	}
	if ( obj === false ) {
		return 'false';
	}
	if ( Array.isArray(obj) ) {
		//base case
		if ( obj.length === 0 ) {
			return '[]';
		} else {
			obj.forEach(function(element) {
				ifArray.push(stringifyJSON(element));
			});
			return '[' + ifArray + ']'; // why adding brackets removes brackets around nested object and removes spaces?
		}
	}
}


console.log(stringifyJSON(nestedArray));
console.log(JSON.stringify(nestedArray));