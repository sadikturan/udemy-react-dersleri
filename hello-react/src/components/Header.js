import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 id="header">Ürün Listesi</h1>
                <h3>Seçilen Ürünler: { this.props.selectedProducts.length }</h3>
            </div>
        );
    }
}

export default Header;