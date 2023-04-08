import React from 'react';

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

export default Product;