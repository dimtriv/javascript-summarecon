// MARKET V1.0

let fruits = ['Apel', 'Anggur', 'Jeruk']
let stock = [5, 7, 8]
let price = [10000, 15000, 20000]
let qty = [0, 0, 0]
let total = [0, 0, 0]


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
            var listFruits = ''
    
            for(var i = 0; i < fruits.length ; i++){
                listFruits += `${i + 1}. ${fruits[i]} | ${stock[i]} | ${price[i]}\n`
            }
    
            alert(listFruits)
            
            // press ok, repeat = true
            // press cancel, repeat = false
            var repeat = confirm('Kembali ke menu utama ?')
            break;
        case 2: // Menambah buah
            // tanya nama, stock, dan harga
            var newFruit = prompt('Masukkan nama buah :')
            var newStock = parseInt(prompt('Masukkan stock buah :'))
            var newPrice = parseInt(prompt('Masukkan harga buah :'))
    
            // push ke masing - masing array
            fruits.push(newFruit)
            stock.push(newStock)
            price.push(newPrice)
    
            // tampilkan list buah
            var listFruits = ''
    
            for(var i = 0; i < fruits.length ; i++){
                listFruits += `${i + 1 }. ${fruits[i]} | ${stock[i]} | ${price[i]}\n`
            }
    
            alert(listFruits)
            
            // press ok, repeat = true
            // press cancel, repeat = false
            var repeat = confirm('Kembali ke menu utama ?')
            break;
        case 3: // Menghapus buah
    
            // munculkan list, minta input user
            var listFruits = ''
    
            for(var i = 0; i < fruits.length ; i++){
                listFruits += `${i + 1 }. ${fruits[i]} | ${stock[i]} | ${price[i]}\n`
            }
    
            var selected = parseInt(prompt(`Pilih buah :\n\n${listFruits}`)) - 1
    
            // hapus buah, stock, harga
            fruits.splice(selected, 1)
            qty.splice(selected, 1)
            price.splice(selected, 1)
            qty.splice(selected, 1)
            total.splice(selected, 1)
    
            // munculkan list
            var listFruits = ''
    
            for(var i = 0; i < fruits.length ; i++){
                listFruits += `${i + 1 }. ${fruits[i]} | ${stock[i]} | ${price[i]}\n`
            }
    
            alert(listFruits)

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
            // press ok, repeat = true
            // press cancel, repeat = false
            var repeat = confirm('Kembali ke menu utama ?')
            break;

            case 5 :
                alert('Dadah ...')
                var repeat = false
    }
} while (repeat);









