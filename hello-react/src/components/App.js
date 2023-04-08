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
            ]
        }
    }

    componentDidMount() {
        const products =  JSON.parse(localStorage.getItem("selectedProducts"));
        if(products) {
            this.setState({
                selectedProducts: products
            });
        }
    }

    componentDidUpdate() {
        const json_str = JSON.stringify(this.state.selectedProducts);
        localStorage.setItem("selectedProducts", json_str);
    }

    selectProduct = (product) => {
        this.setState((prevState) => {

            const index = this.state.selectedProducts.findIndex(item=>item.product.name==product.name);

            if(index > -1) {
                // mevcut eleman
                const updated_list = this.state.selectedProducts.map(item=> {
                    if(item.product.name == product.name) {
                        item.count += 1;
                    }
                    return item;
                });

                return {
                    selectedProducts: updated_list
                }
            }

            const prd = {
                count: 1,
                product: product
            }

            return { selectedProducts: prevState.selectedProducts.concat(prd) }


        });
    }
    
    saveProduct = (product) => {
        this.setState((prevState) => {
            return { products: prevState.products.concat(product) }
        });
    }

    deleteProduct = (product) => {
        this.setState(() => {

            const index = this.state.selectedProducts.findIndex(item => item.product.name == product.name);

            if (index > -1) {
                this.state.selectedProducts.splice(index, 1);
                return {
                    selectedProducts: this.state.selectedProducts
                }
            }


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
                        <SelectedProductList products={this.state.selectedProducts} deleteProduct={this.deleteProduct}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App