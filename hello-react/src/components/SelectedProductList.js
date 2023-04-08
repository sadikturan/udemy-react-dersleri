import React from 'react';

class SelectedProductList extends React.Component {
    render() {
        return (
            <ol className="list-group list-group-numbered">
            {
                this.props.products.map((item, index) => 
                    <li className='list-group-item d-flex justify-content-between align-items-start'>
                        <div className="ms-2 me-auto">
                            { item.product.name }
                        </div>
                        <span className="badge bg-primary rounded-pill me-2">{item.count}</span>
                    </li>
                )
            }
            </ol>
        );
    }
}

export default SelectedProductList;