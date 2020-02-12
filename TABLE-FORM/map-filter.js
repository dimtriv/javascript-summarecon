// MAP
// Digunakan untuk merubah bentuk data
// Method yg dimiliki oleh array
// Menerima sebuah function (callback function)
// callback function akan menerima satu parameter
// callback function harus me-return sesuatu
// map akan me-return array baru (result)

var numArr = [1, 2, 3, 4, 5]

var result = numArr.map((x) => {return x + 2})

console.log(numArr)
console.log(result)
