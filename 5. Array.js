///////////
// ARRAY //
//////////

// Menyimpan data lebih dari satu dengan tipe data yang sama atau berbeda

var bulan0 = 'January'
var bulan1 = 'February'
var bulan2 = 'March'

// index dimulai dari nol
var months = ['January', 'February', 'March']
var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

// console.log(months[2]);
// console.log(days[1]);

/////////////
// METHODS //
////////////

// Mengubah menjadi satu string dan dipisahkan dengan koma
// var monthString = months.toString()
// console.log( monthString );

// Menjadi satu string dg karakter teretntu sebagai penghubung
// console.log(
//     months.join(', ')
// )
// console.log(
//     months.join(' & ')
// )


// Mengurutkan data pada array
// console.log(
//     days.sort()
// )

// Membalik urutan data di array
// Bukan sorting secara descending
// console.log(
//     days.reverse()
// )

// Mencari index data
// console.log(
//     days.indexOf('Saturday')
// )

////////////////
// PROPERTIES //
///////////////

// Mengetahui banyaknya data pada sebuah array
// var colors = ['Red', 'Green', 'Blue', 'Orange']
// var lenColors = colors.length // 4

// for(var i = 0; i < lenColors; i++){
//     console.log(`Color ${colors[i]}`)
// }

/*
    i = 2
    Warna colors[0]
    Warna colors[1]
    Warna colors[2]
    Warna colors[3]
*/

// console.log('Banyaknya data adalah ' + lenColors)

////////////////
// PUSH & POP //
////////////////

// Push, untuk menambahkan data baru ke index terakhir
// Pop, untuk mengeluarkan data yang ada di index terakhir

// var pro = ['Ceb', 'Dendi', 'NOtail']

// pro.push('MidOne')
// console.log( pro )
// [ 'Ceb', 'Dendi', 'NOtail', 'MidOne' ]

// pro.push('Topson', 'ana')
// console.log( pro )
// [ 'Ceb', 'Dendi', 'NOtail', 'MidOne', 'Topson', 'ana' ]

// pro.pop()
// console.log(pro)
// [ 'Ceb', 'Dendi', 'NOtail', 'MidOne', 'Topson' ]

// pro.pop('Dendi')
// console.log(pro)
// [ 'Ceb', 'Dendi', 'NOtail', 'MidOne' ]

/////////////////////
// SHIFT & UNSHIFT //
/////////////////////

// shift, mengeluarkan data index pertama
// unshift, menambahkan data di index pertama

var heroes = ['Rubick', 'Shadow Fiend', 'Windranger']

heroes.push('Axe')
console.log(heroes)
// [ 'Rubick', 'Shadow Fiend', 'Windranger', 'Axe' ]

heroes.shift()
console.log(heroes)
// [ 'Shadow Fiend', 'Windranger', 'Axe' ]

heroes.unshift('Invoker')
console.log(heroes)
// [ 'Invoker', 'Shadow Fiend', 'Windranger', 'Axe' ]