//////////////
// FUNCTION //
//////////////

// Block kode yang dapat memiliki nama dan digunakan secara berulang
// Sebuah function dapat memiliki input, output atau input dan input sekaligus

// no input, no output
function hello(){
    console.log('Hello ... ')
}

// hello()

// 1 input, no output
function greet(name) {
    console.log(`Hello, ${name}`)
}

// greet('Tony')
// greet('Jhonny')
// greet('Dony')

// 3 input, no output
function intro(name, age, job){
    console.log(
        `Nama : ${name}\n` +
        `Umur : ${age}\n` +
        `Pekerjaan : ${job}`
    )
}

// intro('Tony', 43, 'Engineer')
// intro('John', 43, 'Hunter')

// no input, 1 output
// kode setelah return tidak di baca
function grav(){
    console.log('Sebelum return')
    return 9.8
    console.log('Setelah return')
}

// var result = grav()
// console.group(`Satuan gravitasi : ${result}`)

// 2 input, 1 output
// Variable x dan y merupakan variable 'local'
// yang artinya hanya dapat diakses di dalam function sum
// jika mencoba mengakses diluar function sum akan error
function sum(x, y){
    return x +y 
}


// Ini akan error karena tidak bisa mengakses variable di dalam function sum.
// console.log(x);


// var sumResult = sum(4, 5)
// console.log(`4 + 5 = ${sumResult}`)

// console.log(sum(2, 3))

// Function call another function

// function oneFun(){
//     console.log('Function oneFun')
// }

// function twoFun(fn){
//     fn()
// }

// twoFun(oneFun)

// Tugas

function calculate(fn, numOne, numTwo){
    // fn = calSum
    // numOne = 3
    // numTwo = 4
    var resFn = fn(numOne, numTwo)

    return resFn
    
}

function calSum(x, y){
    var res = x  + y

    return res
}

function calMult(x, y){
    var res = x  * y

    return res
}

var result = calculate(calMult, 3, 4)
console.log(result)

















