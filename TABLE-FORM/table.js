var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
];

var arrCategory = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

var renderList = (data, idx) => {
    // Mapping product
    var resProduct = data.map((obj) => {
        // jika id product sama dengan idx
        if(obj.id == idx){
            // Textbox
            return `
                <tr>
                    <td>${obj.id}</td>
                    <td>${obj.category}</td>
                    <td><input type="text" value="${obj.name}"></td>
                    <td><input type="text" value="${obj.price}"></td>
                    <td><input type="text" value="${obj.stock}"></td>
                    <td>
                        <input onclick="funSave()" type="button" value="Save">
                    </td>
                    <td>
                        <input onclick="funCancel()" type="button" value="Cancel">
                    </td>
                </tr>
            `

        } else {
            // String
            return `
                <tr>
                    <td>${obj.id}</td>
                    <td>${obj.category}</td>
                    <td>${obj.name}</td>
                    <td>${obj.price}</td>
                    <td>${obj.stock}</td>
                    <td>
                        <input onclick="funDelete(${obj.id})" type="button" value="Delete">
                    </td>
                    <td>
                        <input onclick="funEdit(${obj.id})" type="button" value="Edit">
                    </td>
                </tr>
            `
        }
    })

    // Mapping category
    var resCategory = arrCategory.map((val) => {
        return `<option>${val}</option>`
    })

    // render product
    document.getElementById('render').innerHTML = resProduct.join("")

    // render category
    document.getElementById('catFilter').innerHTML = resCategory
    document.getElementById('catInput').innerHTML = resCategory
}

// Button Edit
var funEdit = (idx) => {
    // Change to text box
    renderList(arrProduct, idx)
}

// Input data
var funInputData = () => {
    // Ambil data
    var name = document.getElementById("name").value
    var price = parseInt(document.getElementById("price").value)
    var stock = parseInt(document.getElementById("stock").value)
    var category = document.getElementById("catInput").value
    var time = new Date()

    // Push ke object
    arrProduct.push({
        id: time.getTime(),
        name : name,
        price: price,
        stock : stock,
        category: category
    })

    // Render product
    renderList(arrProduct)
}

// Filter name
var funFilterName = () => {
    // Ambil data
    var keyword = document.getElementById("keyword").value // N

    // Filter data
    // val = { name: "Noodle", price: 3500, stock : 9}
    var filterResult = arrProduct.filter((val) => {
        // Mengecilkan input user
        keyword = keyword.toLowerCase() // n
        // Mengecilkan nama product
        var prodName = val.name.toLowerCase() // noodle
        // Return true atau false
        // noodle -> n
        return prodName.includes(keyword)
    })

    // Render data
    renderList(filterResult)

}

// Filter price
var funFilterPrice = () => {
    // Ambil data
    var min = document.getElementById('min').value
    var max = document.getElementById('max').value
    var filterResult = arrProduct

    // Cek kedua textbox, apakah sudah terisi keduanya
    // Jika terisi keduanya, lakukan filter
    // Jika salah satu kosong, tidak lakukan filter

    if( !( min == "" || max == "" ) ){
        // filtering
        // val = { category: 'Fast Food', name: "Noodle"}
        filterResult = arrProduct.filter((val) => {
            return val.price >= min && val.price <= max
        })
    } 

    // Render data
    renderList(filterResult)
}

// Filter category
var funFilterCategory = () => {
    // Ambil data
    var selected = document.getElementById("catFilter").value
    var filterResult = arrProduct

    // Filter data
    // selected = "All"
    // val = { category: 'Electronic' , name: "Headphone"}
    if (selected != "All"){
        filterResult = arrProduct.filter((val) => {
            return val.category == selected
        })
    }

    // Render data
    renderList(filterResult)
}

// Button Delete
var funDelete = (idx) => {
    // Delete berdasarkan id
    arrProduct = arrProduct.filter((val) => {
        return val.id != idx
    })

    // Render data
    renderList(arrProduct)

}



renderList(arrProduct)