import React from 'react';

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
                <button className='btn btn-primary' type="submit">Ürün Ekle</button>
            </form>
        );
    }
}

export default NewProduct;