var products = [
    {
        name: "iphone 15",
        price: 50000
    },
    {
        name: "iphone 16",
        price: 60000
    }
    ,
    {
        name: "iphone 17",
        price: 60000
    }
]

function addProduct(event, p_name) {
    console.log(event.target, p_name);
}


var template = 
    <div>
        <h1 id="header">Ürün Listesi</h1>

        {
            products.map((product,index) => (
                <div className="product-details" key={index}>
                    { <h2> { product.name } </h2>}
                    { product.price }
                    <button type="button" id={index} onClick={(event) => addProduct(event, product.name)}>Ekle</button>
                </div>
            ))
        }

    </div>; 


var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);