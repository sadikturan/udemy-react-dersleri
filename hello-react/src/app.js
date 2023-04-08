import React from 'react';
import ReactDom from 'react-dom/client';

var root = ReactDom.createRoot(document.getElementById("root"));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
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
                },
                {
                    name: "iphone 18",
                    price: 70000
                }
            ],
            selectedProducts: []
        }
    }

    selectProduct = (product) => {
        this.setState((prevState) => {
            return { selectedProducts: prevState.selectedProducts.concat(product) }
        });
    }
    
    saveProduct = (product) => {
        this.setState((prevState) => {
            return { products: prevState.products.concat(product) }
        });
    }

    render() {
        return (
            <div>
                <Header selectedProducts={this.state.selectedProducts}/>
                <NewProduct saveProduct={this.saveProduct}/>        
                <ProductList products={this.state.products} selectProduct={this.selectProduct}/>   
            </div>
        );
    }
}

class ProductList extends React.Component {
    render() {
        return (
            this.props.products.map((product,index) => (
                <Product product={product} key={index} selectProduct={this.props.selectProduct} />
            ))
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 id="header">Ürün Listesi</h1>
                <h3>Seçilen Ürünler: { this.props.selectedProducts.length }</h3>
            </div>
        );
    }
}

class NewProduct extends React.Component {
    saveProduct = (event) => {
        event.preventDefault();
        const name = event.target.elements.p_name.value;
        const price = event.target.elements.p_price.value;
        const product = {
            name: name,
            price: price
        }
        this.props.saveProduct(product);
        event.target.elements.p_name.value = "";
        event.target.elements.p_price.value = "";
    }
    render() {
        return (
            <form onSubmit={this.saveProduct}>
                <input type="text" name="p_name" id="p_name" />
                <input type="text" name="p_price" id="p_price" />
                <button type="submit">Ürün Ekle</button>
            </form>
        );
    }
}

class Product extends React.Component {
    render() {
        return (
            <div className="product-details">
                { <h2> { this.props.product.name } </h2>}
                { this.props.product.price }
                <button type="button" onClick={() => this.props.selectProduct(this.props.product)}>Ekle</button>
            </div>
        );
    }
}

root.render(<App />);