////////////
// OBJECT //
////////////

// Menggunakan kurung kurawal {}
// Tidak mengenal indexing, melainkan property dan value
// Data dari database nantinya akan berbentuk object
// Property : variable didalam object
// Method : function didalam object

var person = {
    name : 'John',
    age: 49,
    hobbies: ['Run', 'Chase'],
    pets : [
        {name: 'Holly'},
        {name: 'Molly'},
        {name: ['Ring', 'Ding', 'Dong']}
    ],

    intro : function (){
        console.log(`Hello, My name is${this.name}`)
        console.log(`My age is ${this.age} y.o`)
        console.log(`One of my pet is ${this.pets[0].name}`)
        console.log(`And the other one is, ${this.pets[1].name}`)
        console.log(`Then i have ${this.pets[2].name}`)
    }
}

console.log(person.name)
person.intro()


/*
var person = {
    name : 'John',
    age: 49,
    hobbies: ['Run', 'Chase'],
    pets : [
        {name: 'Holly'},
        {name: 'Molly'}
    ],

    intro : function (obj){
        obj.find(this.name)
    }
}

var coba = {
    find(x) {
        console.log(`I got you, ${x}`)
    }
}

person.intro(coba)
*/