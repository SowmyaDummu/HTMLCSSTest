// Question - 1
function reverseString(str) {
    // Your logic here
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Expected output: "olleh"

// Question - 2
function isPalindrome(str) {
    // Your logic here
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("racecar")); // Expected output: true
console.log(isPalindrome("hello")); // Expected output: false

// Question - 3
function findMax(arr) {
    // Your logic here
    return Math.max(...arr);
}
console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9

// Question - 4
function removeDuplicates(arr) {
    // Your logic here
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]

// Question - 5
function factorial(n) {
    // Your logic here
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Expected output: 120

// Question - 6
function fibonacci(n) {
    // Your logic here
    if(n<=0) return[];
    if(n == 1) return [0];

    let fib = [0,1];
    for(let i=2; i<n;i++){
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib;
    }

console.log(fibonacci(5)); // Expected output: [0, 1, 1, 2, 3]

// Question - 7
function areAnagrams(str1, str2) {
    // Your logic here
    if(str1.length !== str2.length) return false;
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(areAnagrams("listen", "silent")); // Expected output: true

// Question - 8
function secondLargest(arr) {
    // Your logic here
    arr.sort((a, b) => b-a);
    return arr[1];
}
console.log(secondLargest([10, 20, 4, 45, 99])); // Expected output: 45

// Question - 10
function countOccurrences(str) {
    // Your logic here
    let counts = {};

    for(let char of str){
        counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
}
console.log(countOccurrences("hello")); // Expected output: { h: 1, e: 1, l: 2, o: 1 }

// Question - 11
function flattenArray(arr) {
    // Your logic here
    arr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Expected output: [1, 2, 3, 4, 5, 6]

// Question - 15
function arrayIntersection(arr1, arr2) {
    // Your logic here
    return arr1.filter(num => arr2.includes(num));
}
console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Expected output: [2, 3]

// Question - 17
function mergeSortedArrays(arr1, arr2) {
    // Your logic here
    return arr1.concat(arr2).sort((a,b) => a-b);
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Expected output: [1, 2, 3, 4, 5, 6]

// Question - 20
function firstNonRepeatingChar(str) {
    // Your logic here
    for (let char of str){
        if(str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    } 
    return null;
}
console.log(firstNonRepeatingChar("aabbcce")); // Expected output: "e"

// 1 Mark Questions

/*1. 
122
32
02
112
NaN2
NaN
*/

//2. false

//3. 456

//4. undefined

/*5. 
function sum(a){
return function (b) {
    if(b !== undefined) return SubmitEvent(a+b);
    return a;
};
}
*/

//8. number

/*10. 
undefined
5
*/