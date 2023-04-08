import React from 'react';

class NewProduct extends React.Component {
    saveProduct = (event) => {
        event.preventDefault();
        const name = event.target.elements.p_name.value;
        const price = event.target.elements.p_price.value;
        const image = event.target.elements.p_image.value;
        const product = {
            name: name,
            price: price,
            image: image
        }
        this.props.saveProduct(product);
        event.target.elements.p_name.value = "";
        event.target.elements.p_price.value = "";
        event.target.elements.p_image.value = "";
    }
    render() {
        return (
            <form onSubmit={this.saveProduct} className="card card-body">
                <div className="mb-3">
                    <label htmlFor="p_name" className="form-label">Name</label>
                    <input className='form-control' type="text" name="p_name" id="p_name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="p_price" className="form-label">Price</label>
                    <input className='form-control' type="text" name="p_price" id="p_price" />
                </div>
                <div className="mb-3">
                    <label htmlFor="p_image" className="form-label">Image</label>
                    <input className='form-control' type="text" name="p_image" id="p_image" />
                </div>
                <button className='btn btn-primary' type="submit">Ürün Ekle</button>
            </form>
        );
    }
}

export default NewProduct;