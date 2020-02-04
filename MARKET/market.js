// MARKET V1.0

let fruits = ['Apel', 'Anggur', 'Jeruk']
let stock = [5, 7, 8]
let price = [10000, 15000, 20000]


var mainOpt = parseInt(prompt(
    'Menu Utama : \n\n' +
    '0. Menampilkan daftar buah\n' +
    '1. Menambah buah\n' +
    '2. Menghapus buah\n' +
    '3. Membeli buah\n\n'
))

if(mainOpt == 0){
    // Menampilkan list buah
} else if(mainOpt == 1){
    // Menambahkan buah
} else if(mainOpt == 2){
    // Menghapus  buah
} else if(mainOpt == 3){ // Membeli buah
    // qty setiap buah
    let qty = [0, 0, 0]
    // total setiap buah
    let total = [0, 0, 0]
    // total biaya kesuluruhan
    let totalPrice = 0

    // Meminta qty setiap buah, loop sebanyak jumlah buah
    for (var i = 0; i < fruits.length; i++){
        do {
            qty[i] = prompt(`Masukkan jumlah ${fruits[i]} : `)
            // Jika qty yang diminta melebihi stock
            if(qty[i] > stock[i]){
                alert(
                    `Kesalahan dalam input, stock ${fruits[i]} : ${stock[i]}`
                )
            } 
            // Akan mengulang loop jika qty lebih besar dari stock
        } while (qty[i] > stock[i]);

        //  total biaya per buah
        total[i] = price[i] * qty[i]
        // total biaya kesuluruhan
        totalPrice += total[i]
    }

    var detailStr = ''
    for(var i = 0; i < fruits.length; i++){
        detailStr += `${fruits[i]} : ${qty[i]} x ${price[i]} = ${total[i]}\n`
    }

    // Munculkan Alert
    alert(
        'Detail Belanja \n\n' + detailStr + '\n' +
        'Total : Rp. ' + totalPrice.toLocaleString('in')
    )

    
    var moneyCondition
    do {
        // User input uang
        var money = parseInt(prompt('Masukkan jumlah uang : '))

        // Cari selisih uang dan total biaya
        var margin = money - totalPrice

        // Jika uang user kurang
        if(money < totalPrice){
            alert(`Mohon input kembali, uang Anda kurang Rp. ${margin}`)
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

} else {
    // Invalid menu
}








