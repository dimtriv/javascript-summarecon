// WHILE LOOP
// Cek kondisi lebih dulu, kemudian running jika kondisi terpenuhi
// var number = 0

// // kondiris while harus true untuk running block kode
// while(number > 5){
//     // block kode yang akan di running jika condition bernilai true
//     console.log(`While ke - ${number}`)
//     number++
// }

// DO WHILE
// Running minimal sekali, kemudian cek kondisi while
// Minimal akan running sekali, terlepas dari apapun hasil kondisi pada while
// number = 0

// do{
//     console.log(`Do While ke - ${number}`)
//     number++
// }while(number > 5)

// WHILE GENAP
// number = 0 -> 2 -> 4 -> ... -> 12

// while(number <= 10){ // False
//     console.log(`While ke - ${number}`)
//     number += 2
// }

/*
    While ke - 0
    While ke - 2
    While ke - 4
    ...
    While ke - 10
*/

// DO WHILE GANJIL
// number = 1
// do {
//     console.log(`Do While ke - ${number}`)
//     number += 2

// } while (number < 10);

// FOR LOOP

for(number = 0; number < 5; number ++){
    console.log(`For ke - ${number}`)
    
}

/*
    1. Pertama kali running akan membaca kode yang di 'kiri'

    2. Akan running kode 'tengah' untuk mendapatkan nilai boolean (T / F)
        2.1 Jika True, maka running kode pada block kurung kurawal { }
        2.2 Jika False, maka akan berhenti / keluar dari for loop
    
    3. Jika sudah selesai running kode pada kurun kurawal / step 2.1
        Maka akan running kode 'kanan'
        Kemudian running kode 'tengah' / step 2
        Dan akan terus mengulang hingga step 2 menghasilkan False (Stop)
*/