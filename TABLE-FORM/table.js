var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
  ];

// callback function, menerima object {id, name, price, ...}
function manual(obj){
    return `
        <tr>
            <td>${obj.id}</td>
            <td>${obj.category}</td>
            <td>${obj.name}</td>
            <td>${obj.price}</td>
            <td>${obj.stock}</td>
        </tr>
    `
}

var renderList = () => {
    var result = arrProduct.map(manual)

    document.getElementById('render').innerHTML = result.join("")
}

renderList()