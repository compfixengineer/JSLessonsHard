let num = 266219;
let prodOfNumber = 1;
let arr = Array.from(String(num), Number);
console.log(arr);

for (i = 0; i <= arr.length-1; i++) {
    prodOfNumber *= arr[i];
};

prodOfNumber = prodOfNumber**3; 
console.log(String(prodOfNumber).slice(0,2));