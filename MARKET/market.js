// MARKET V1.0

// var apple = 3, grape = 3, orange = 3
// var apple = grape = orange = 3

// Setiap buah memiliki harga satuan
var priceApple = 10000
var priceGrape = 15000
var priceOrange = 20000

// Stock buah
var stockApple = 5
var stockGrape = 7
var stockOrange = 8

// Meminta qty setiap buah
var qtyApple = prompt('Masukkan jumlah Apel :')
// Jika qty yang diminta melebihi stock
if(qtyApple > stockApple){
    alert(`Kesalahan dalam input, stock Apel : ${stockApple}`)
    // set menjadi nol
    qtyApple = 0
}

var qtyGrape = prompt('Masukkan jumlah Anggur :')
if(qtyGrape > stockGrape){
    alert(`Kesalahan dalam input, stock Apel : ${stockGrape}`)
    qtyGrape = 0
}

var qtyOrange = prompt('Masukkan jumlah Jeruk :')
if(qtyOrange > stockOrange){
    alert(`Kesalahan dalam input, stock Apel : ${stockOrange}`)
    qtyOrange = 0
}

if(qtyApple == 0 || qtyGrape == 0 || qtyOrange == 0){
    alert ("Transaksi dibatalkan, salah satu atau lebih mengalami kesalahan input")

} else {
    // Hitung total biaya per buah
    var totalApple = priceApple * qtyApple
    var totalGrape = priceGrape * qtyGrape
    var totalOrange = priceOrange * qtyOrange

    // Hitung keseluruhan total biaya
    var totalPrice = totalApple + totalGrape + totalOrange

    // Munculkan Alert
    alert(
        'Detail Belanja \n\n' +
        'Apple : ' + qtyApple + ' x ' + priceApple + ' = ' + totalApple + '\n' +
        'Grape : ' + qtyGrape + ' x ' + priceGrape + ' = ' + totalGrape + '\n' +
        'Orange : ' + qtyOrange + ' x ' + priceOrange + ' = ' + totalOrange + '\n\n'+
        'Total : Rp. ' + totalPrice.toLocaleString('us')
    )

    var money = parseInt(prompt('Masukkan jumlah uang : '))

    var margin = money - totalPrice

    if(money < totalPrice){
        alert(`Transaksi dibatalkan, uang Anda kurang Rp. ${margin}`)
    } else if (money > totalPrice){
        alert(`Terimakasih\n\nUang kembali Anda Rp. ${margin}`)
    } else {
        alert('Terimakasih !')
    }

}




/* 
    Upgrade :

    1. Setiap meminta input, jika melebihi stock :
        Munculkan alert 'Kesalahan input, stock (nama buah) = (stock buah)
        Qty belanjaan untuk buah tersebut menjadi nol
    
    2. Jika ada salah satu buah yang memiliki qty nol :
        Munculkan alert 'Transaksi dibatalkan, salah satu atau lebih mengalami kesalahan input'
        lalu selesai

    3. Jika tidak ada kesalahan input
        Munculkan informasi biaya (seperti versi sebelumnya)

    4. Meminta user untuk input sejumlah uang :
        Jika uang yang dimasukkan kurang :
            Munculkan alert 'Transaksi dibatalkan, Uang yang Anda masukkan kurang (jumlah uang) '
        Jika uang yang dimasukkan lebih :
            Munculkan alert 'Terimakasih, Uang kembali untuk Anda (Jumlah Uang)
        Jika uang uyang dimasukkan pas :
            Munculkan alert 'Terimakasih'
*/