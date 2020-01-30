// MARKET V1.0

// var apple = 3, grape = 3, orange = 3
// var apple = grape = orange = 3

// Setiap buah memiliki harga satuan
var priceApple = 10000
var priceGrape = 15000
var priceOrange = 20000

// Meminta qty setiap buah
var apple = prompt('Masukkan jumlah Apel :')
var grape = prompt('Masukkan jumlah Anggur :')
var orange = prompt('Masukkan jumlah Jeruk :')

// Hitung total biaya per buah
var totalApple = priceApple * apple
var totalGrape = priceGrape * grape
var totalOrange = priceOrange * orange

// Hitung keseluruhan total biaya
var totalPrice = totalApple + totalGrape + totalOrange

// Munculkan Alert
alert(
    'Detail Belanja \n\n' +
    'Apple : ' + apple + ' x ' + priceApple + ' = ' + totalApple + '\n' +
    'Grape : ' + grape + ' x ' + priceGrape + ' = ' + totalGrape + '\n' +
    'Orange : ' + orange + ' x ' + priceOrange + ' = ' + totalOrange + '\n\n'+
    'Total : Rp. ' + totalPrice.toLocaleString('us')
)


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