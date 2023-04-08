var products = [
    {
        name: "iphone 15",
        price: 50000,
        description: "iyi telefon",
        colors: ["silver","red","white","black"]
    },
    {
        name: "iphone 16",
        price: 60000,
        description: "iyi telefon",
        colors: ["silver","red","white"]
    }
    ,
    {
        name: "iphone 17",
        price: 60000,
        description: "iyi telefon",
        colors: ["silver","red","white"]
    }
]

function formatPrice(product) {
    return <p>{ product.price } TL</p>;
}

var template = 
    <div>
        <h1 id="header">Ürün Listesi</h1>

        {
            products.map((product,index) => (
                <div className="product-details" key={index}>
                    { (product.name && product.name.length>3) ? <h2> { product.name } </h2>: <p> ürün ismi girilmemiş </p> }
                    { (product.price && product.price > 0) && formatPrice(product) }
                    { product.description &&  <p> { product.description } </p>}
                    { product.colors.length > 0 ? <p>renk seçeneklerimiz mevcut</p>:""}
                    <ul>
                        {
                            product.colors.map((color,index) => (<li key={index}>{ color }</li>))                    
                        }
                    </ul>
                </div>
            ))
        }

       

    </div>; 


var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);