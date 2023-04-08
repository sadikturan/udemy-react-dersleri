import React from 'react';

import ProductList from './ProductList';
import Header from './Header';
import NewProduct from './NewProduct';
import SelectedProductList from './SelectedProductList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: "iphone 15",
                    price: 50000,
                    image: "1.jpg"
                },
                {
                    name: "iphone 16",
                    price: 60000,
                    image: "2.jpg"
                },
                {
                    name: "iphone 17",
                    price: 60000,
                    image: "3.jpg"
                }
            ],
            selectedProducts: [
                {
                    name: "iphone 17",
                    price: 60000,
                    image: "3.jpg"
                }
            ]
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
            <div className='container mt-3'>
                <Header selectedProducts={this.state.selectedProducts}/>
                <div className="row mt-3">
                    <div className="col-4">
                        <NewProduct saveProduct={this.saveProduct}/>        
                    </div>
                    <div className="col-4">
                        <ProductList products={this.state.products} selectProduct={this.selectProduct}/>   
                    </div>
                    <div className="col-4">
                        <SelectedProductList products={this.state.selectedProducts}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App