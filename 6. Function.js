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
// function greet(name) {
//     console.log(`Hello, ${name}`)
// }

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
// function grav(){
//     console.log('Sebelum return')
//     return 9.8
//     console.log('Setelah return')
// }

// var result = grav()
// console.group(`Satuan gravitasi : ${result}`)

// 2 input, 1 output
function sum(x, y){
    var result = x + y

    return result
}

var sumResult = sum(4, 5)
console.log(`4 + 5 = ${sumResult}`)

console.log(sum(2, 3))















