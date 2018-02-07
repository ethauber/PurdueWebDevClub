let arr = [2, 3, 4]
let newArr = arr.filter(num => num % 2 === 0);
let es5Arr = filter(function(num) {
    return num % 2 === 0;
});
console.log("newArr", newArr);
console.log("es5", es5Arr)
// Paste into google chrome console to confirm