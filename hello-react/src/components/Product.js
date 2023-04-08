import React from 'react';

class Product extends React.Component {
    render() {
        return (
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ `img/${ this.props.product.image }` } alt="" className='img-fluid' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{ this.props.product.name } </h5>
                            <p>{ this.props.product.price }</p>
                            <button type="button" className='btn btn-primary btn-sm' onClick={() => this.props.selectProduct(this.props.product)}>Ekle</button>
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default Product;