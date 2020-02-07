// MARKET V1.0

let fruits = [
    {name : 'Apel', price: 10000, stock: 5, qty : 0, total: 0},
    {name : 'Anggur', price: 15000, stock: 7, qty : 0, total: 0},
    {name : 'Jeruk', price: 20000, stock: 8, qty : 0, total: 0}
]

function renderList() {
    var listFruits = ''
    
    if(fruits.length > 0){
        for(var i = 0; i < fruits.length ; i++){
            listFruits += `${i + 1}. ${fruits[i].name} | ${fruits[i].stock} | ${fruits[i].price}\n`
        }

        return listFruits
    }

    return 'Buah tidak tersedia'

}

do {
    var mainOpt = parseInt(prompt(
        'Menu Utama : \n\n' +
        '1. Menampilkan daftar buah\n' +
        '2. Menambah buah\n' +
        '3. Menghapus buah\n' +
        '4. Membeli buah\n' +
        '5. Exit\n\n'
    ))
    
    switch (mainOpt) {
        case 1: // Daftar buah
            alert(renderList())
    
            // press ok, repeat = true
            // press cancel, repeat = false
            var repeat = confirm('Kembali ke menu utama ?')
            break;
        case 2: // Menambah buah
            // tanya nama, stock, dan harga
            var newName = prompt('Masukkan nama buah :')
            var newStock = parseInt(prompt('Masukkan stock buah :'))
            var newPrice = parseInt(prompt('Masukkan harga buah :'))
    
            // push ke masing - masing array
            fruits.push({
                name: newName, 
                stock: newStock, 
                price: newPrice,
                qty: 0,
                total: 0
            })
    
            // tampilkan list buah
            alert(renderList())
            
            // press ok, repeat = true
            // press cancel, repeat = false
            var repeat = confirm('Kembali ke menu utama ?')
            break;
        case 3: // Menghapus buah
    
            // munculkan list, minta input user
            
    
            var selected = parseInt(prompt(`Pilih buah :\n\n${renderList()}`)) - 1
    
            // hapus buah pada index terpilih
            fruits.splice(selected, 1)
    
            // munculkan list
            alert(renderList())

            // press ok, repeat = true
            // press cancel, repeat = false
            var repeat = confirm('Kembali ke menu utama ?')   
            break;
        case 4: // Membeli buah
     
            // total biaya kesuluruhan
            let totalPrice = 0
    
            // Meminta qty setiap buah, loop sebanyak jumlah buah
            for (var i = 0; i < fruits.length; i++){
                do {
                    fruits[i].qty = prompt(`Masukkan jumlah ${fruits[i].name} : `)
                    // Jika qty yang diminta melebihi stock
                    if(fruits[i].qty > fruits[i].stock){
                        alert(
                            `Kesalahan dalam input, stock ${fruits[i].name} : ${fruits[i].stock}`
                        )
                    } 
                    // Akan mengulang loop jika qty lebih besar dari stock
                } while (fruits[i].qty > fruits[i].stock);
    
                //  total biaya per buah
                fruits[i].total = fruits[i].price * fruits[i].qty
                // total biaya kesuluruhan
                totalPrice += fruits[i].total
            }
    
            var detailStr = ''
            for(var i = 0; i < fruits.length; i++){
                detailStr += `${fruits[i].name} : ${fruits[i].qty} x ${fruits[i].price} = ${fruits[i].total}\n`
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
            // press ok, repeat = true
            // press cancel, repeat = false
            var repeat = confirm('Kembali ke menu utama ?')
            break;

            case 5 :
                alert('Dadah ...')
                var repeat = false
    }
} while (repeat);



/*
- Ubah penyimpanan data menjadi array of object
    - Berikan kepada student nilai awal array ini
    - Student akan refactor kode.
- Buatlah sebuah function untuk membuat sebuah list product

*/





