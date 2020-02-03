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
var monthString = months.toString()
// console.log( monthString );

// Menjadi satu string dg karakter teretntu sebagai penghubung
console.log(
    months.join(', ')
)
console.log(
    months.join(' & ')
)


// Mengurutkan data pada array
console.log(
    days.sort()
)

// Membalik urutan data di array
// Bukan sorting secara descending
console.log(
    days.reverse()
)

// Mencari index data
console.log(
    days.indexOf('Saturday')
)