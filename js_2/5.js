products = [
    {name: "Bag", price:200, qty:3},
    {name: "Shoes", price:200, qty:0},
    {name: "Laptop", price:200, qty:2},
    {name: "Phone", price:200, qty:0}
    ];
    
const filterProduct = (products) => {
    for(const pd of products){
        if(pd.qty > 0){
            console.log(`\nName: ${pd.name}\nPrice: ${pd.price}\nQuantity: ${pd.qty}`)
        }
    }
    
}


filterProduct(products) 