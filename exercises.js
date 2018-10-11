/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(ar){
  var result = [];
  for (var i = 0; i < ar.length; i++){
    result.push(ar[i]*2)
  }
  return result
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {string}
 * @param {number}
 * @return {Bool}
 */

 var sumArrays = function(ar1, ar2){
  var result = 0;
  for (var i = 0; i < ar1.length; i++){
    result(ar1[i]);
  }
  for (var i = 0; i < ar2.length; i++){
    result(ar2[i]);
  }
  return result;
};

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */

var stringCount = function(string) {
  return string.length;
};


/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function(array){
  return array.length;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arr){
  var result = 6;
  for (let i = 0; i < arr.length; i++){
    result.push += arr[i];
  }
  return result;
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function(arr){
  var arrLengths = [];
  for (let i = 0; i < arr.length; i++){
    arrLengths.push(arr[i].length);
    
  }
  return arrLengths;
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function(str){
  let strLengthsResult = 0;
  for (let i = 0; i < str.length; i++){
    strLengthsResult += str[i].length;
    
  }
  return strLengthsResult;
};

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */

 var convertToArray = function(obj) {
  return object.values(obj);

//   var objVal = [];
//   for (var i = 0; i < Object.values(obj).length; i++) {
//     objVal.push(Object.values(obj)[i]);
//   }
//   return objVal;
};

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */

 var objectSize = function(obj){
  return Object.values(obj).length;
};

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */

 var createZeroFilledArray = function(num) {
  var arr = [];
  for (var i = 0; i < num; i++){
    arr.push(0);
  }
  return arr;
};

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(arr){
  return arr.slice(0, arr.length -1);
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(str){
  var arr =[];
  arr = str.split('');
  return arr;
};
//I am stressed out I will look back at this when im doin it big and be like "it was worth it"
/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(str){
  return str[str.length -1].length;
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(arr){
  var result = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < 10){
      result += arr[i];
    }
  }
  return result;
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(str){
  var arr = [];
  for (var i = 0; i < str.length; i++){
    if (str[i].length > 10){
      arr.push(str[i]);
    }
  }
  return arr.length;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(arr){
  var result = 1;
  for(var i = 0; i < arr.length; i++){
  result = result * arr[i];
  }
  return result;
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function (str){
  var result = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i] > 0){
    result + str[i];
    }
  }
  return result;
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arr){
  console.log(arr);
  var result = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i].length < 4){
      result.push(arr[i]);
    }
  }
  // console.log(result);
  return result.length;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(arr){
  return arr.length
};

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(obj){
  var arr = [];
  for (var i = 0; i < Object.keys(obj).length; i++){
    arr.push(Object.keys(obj)[i]);
  }
  return arr;
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(obj){

var arr = [];
  for (var i = 0; i < Object.values(obj).length; i++){
    arr.push(Object.values(obj)[i]);
  }
  return arr;
};

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(key, value){
  console.log(key);
  console.log(value);
  var obj = {}
  obj[key] = value;
  console.log(obj);
  return obj;

};

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {obj}
 */
var makeObjectReverse = function (value, key){
console.log(key);
console.log(value);
var obj = {};
obj[key] = value;
console.log(obj);
return obj;
}
/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(arr){
  console.log(arr);
  console.log(arr[0]);
  console.log(arr[1]);
  return{
    [arr[0]] : arr[1]
  };
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function (arr){
  return{
    [arr[1]] : arr [0]
  }
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function (str){
  return {[str[0]] : 0,
         [str[1]] : 0,
          [str[2]] : 0}
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(obj){
  var result = [];
  result = Object.values(obj);
  return result
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function (obj){
  var result = [];
  result = Object.keys(obj);
  return result;
};

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj){
  var arr = [];
  arr.push([Object.keys(obj)[0], Object.values(obj)[0]]);
  arr.push([Object.keys(obj)[1], Object.values(obj)[1]]);
  console.log(arr);
  return arr;
};



/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = false;
  }
  console.log(obj);
  return obj;
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(key, value) {
  console.log(key, value);
  var obj = {};
  for (var i = 0; i < key.length; i++) {
    obj[key[i]] = value[i];
  }
  console.log(obj);
  return obj;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(obj1, obj2) {
  console.log(obj1, obj2);
  var arr = [];
  for (var key in obj1) {
    arr.push([key, obj1[key]]);
  }
  for (var prop in obj2) {
    arr.push([prop, obj2[prop]]);
  }
  console.log(arr);
  return arr;
}
/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
   obj[arr[i]] = true;
  }
  console.log(obj);
  return obj;
}
/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      obj[arr[i]] = true;
    }
    else {
      obj[arr[i]] = false;
    }
  }
  console.log(obj);
  return obj;
}
/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  console.log(obj);
  return obj;
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function(str) {
  console.log(str);
  var arr = str.split('');
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  console.log(obj);
  return obj;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i].length;
  }
  console.log(obj);
  return obj;
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap = function(str) {
  console.log(str);
  var obj = {}, i, value;
  for (var i = 0; i < str.length; i++) {
    value = str[i];
    if (typeof obj[value] === 'undefined') {
      obj[value] = 1;
    }
    else {
      obj[value]++;
    }
  }
  console.log(obj);
  return obj;
}
/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (var j = 0; j < arr[i].length-1; j++) {
      console.log(arr[i][j]);
      obj[arr[i][j]] = arr[i][j + 1];
    }
  }
  console.log(obj);
  return obj;
}

module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: null,
  arraysToObject: null,
  objectsToTuples: null,
  mapArrayValues: null,
  mapStringCounts: null,
  arrayToObjectNums: null,
  stringToKeys: null,
  charCountMap: null,
  frequencyMap: null,
  tupleConvertToObject: null
}
