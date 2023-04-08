import React from 'react';

class SelectedProductList extends React.Component {
    render() {
        return (
            <ol className="list-group list-group-numbered">
            {
                this.props.products.map((product, index) => 
                    <li className='list-group-item'>
                        { product.name }
                    </li>
                )
            }
            </ol>
        );
    }
}

export default SelectedProductList;