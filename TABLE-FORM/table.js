var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
];

var arrCategory = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

var renderList = (data) => {
    // Mapping product
    var resProduct = data.map((obj) => {
        return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.stock}</td>
            </tr>
        `
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



renderList(arrProduct)