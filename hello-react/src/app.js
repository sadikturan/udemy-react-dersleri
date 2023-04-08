var root = ReactDOM.createRoot(document.getElementById("root"));

var products = [
    {
        name: "iphone 15",
        price: 50000
    },
    {
        name: "iphone 16",
        price: 60000
    },
    {
        name: "iphone 17",
        price: 60000
    }
    ,
    {
        name: "iphone 18",
        price: 70000
    }
]

var selectedProducts = [];

function selectProduct(event, p_name) {
    console.log(event.target, p_name);
    if (!selectedProducts.includes(p_name)){
        selectedProducts.push(p_name);
    } 
    renderApp();
}

function saveProduct(event) {
    event.preventDefault();
    var p_name = event.target.elements.p_name.value;
    var p_price = event.target.elements.p_price.value
    var product = {
        name: p_name,
        price: p_price
    }
    products.push(product);
    event.target.elements.p_name.value = "";
    event.target.elements.p_price.value = "";
    renderApp();
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 id="header">Ürün Listesi</h1>
                <h3>Seçilen Ürünler: { selectedProducts.length }</h3>
            </div>
        );
    }
}

class NewProduct extends React.Component {
    render() {
        return (
            <form onSubmit={saveProduct}>
                <input type="text" name="p_name" id="p_name" />
                <input type="text" name="p_price" id="p_price" />
                <button type="submit">Ürün Ekle</button>
            </form>
        );
    }
}

class ProductList extends React.Component {
    render() {
        return (
            this.props.products.map((product,index) => (
                <Product product={product} key={index}/>
            ))
        );
    }
}

class Product extends React.Component {
    render() {
        return (
            <div className="product-details">
                { <h2> { this.props.product.name } </h2>}
                { this.props.product.price }
                <button type="button" onClick={(event) => selectProduct(event, this.props.product.name)}>Ekle</button>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NewProduct />        
                <ProductList products={products} />   
            </div>
        );
    }
}

root.render(<App />);