import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
    render() {
        return (
            this.props.products.map((product,index) => (
                <Product product={product} key={index} selectProduct={this.props.selectProduct} />
            ))
        );
    }
}

export default ProductList;