// let fruits = ['Apple','Banana'];
// let newlength = fruits.push("Cherry");
// console.log(fruits);
// console.log(newlength);

// Q1. Reverse the array...
// let arr = [1,2,3,3,4,5]

// let reverse = []

// while(arr.length>0){
//     reverse.push(arr.pop())
// }
// console.log(reverse);

// Q2. Remove all negative integers to from an array..

// let arr1 = [1,2,3,4,-2,-31,24,-424];
// let new1 = [];
// while(arr1.length>0){
//     let val = arr1.shift();
//     if(val>0){
//         new1.push(val)
//     }
// }
// console.log(new1)


// Q3. Check if the array is palindrome

// function palindrome() {
//     let array = [4, 2, 5, 2, 6, 2, 5, 2, 4]
//     let array2 = []
//     let reverse = []
//     for (let i = 0; i < array.length; i++) {
//         array2.push(array[i]);
//     }
//     while (array.length > 0) {
//         reverse.push(array.pop());
//     }

//     for (let i = 0; i < array2.length; i++) {
//         if (array2[i] !== reverse[i]) {
//             return "Not a Palindrome"
//         }

//     }
//     return "palindrome"
// }


// console.log(palindrome())


// Q4. remove all duplicate elements from the array.
// Q5. Split even and odd number from a given array.
// Q6. Move all zero to end. [2,0,3,0,6,8,9]->[2,3,6,8,0,0]