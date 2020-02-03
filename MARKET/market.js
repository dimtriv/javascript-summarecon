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


do {
    var qtyApple = prompt('Masukkan jumlah Apel :')
    // Jika qty yang diminta melebihi stock
    if(qtyApple > stockApple){
        alert(`Kesalahan dalam input, stock Apel : ${stockApple}`)
    } 

} while (qtyApple > stockApple);

do {
    var qtyGrape = prompt('Masukkan jumlah Anggur :')
    // Jika qty yang diminta melebihi stock
    if(qtyGrape > stockGrape){
        alert(`Kesalahan dalam input, stock Anggur : ${stockGrape}`)
    } 

} while (qtyGrape > stockGrape);

do {
    var qtyOrange = prompt('Masukkan jumlah Orange :')
    // Jika qty yang diminta melebihi stock
    if(qtyOrange > stockOrange){
        alert(`Kesalahan dalam input, stock Orange : ${stockOrange}`)
    } 

} while (qtyOrange > stockOrange);

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

var moneyCondition
do {
    // User input uang
    var money = parseInt(prompt('Masukkan jumlah uang : '))

    // Cari selisih uang dan total biaya
    var margin = money - totalPrice

    // Jika uang user kurang
    if(money < totalPrice){
        alert(`Transaksi dibatalkan, uang Anda kurang Rp. ${margin}`)
        moneyCondition = true

    // Jika uang user lebih
    } else if (money > totalPrice){
        alert(`Terimakasih\n\nUang kembali Anda Rp. ${margin}`)
        moneyCondition = false
    
    // Jika uang user pas
    } else {
        alert('Terimakasih !')
        moneyCondition = false

    }

} while (moneyCondition);







