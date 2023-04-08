import React from 'react';
import ReactDom from 'react-dom/client';

import ProductList from './components/ProductList';
import Header from './components/Header';
import NewProduct from './components/NewProduct';

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

root.render(<App />);