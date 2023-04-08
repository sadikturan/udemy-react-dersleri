import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className='bg-primary p-2 text-white'>
                <h3>Seçilen Ürünler: { this.props.selectedProducts.length }</h3>
            </nav>
        );
    }
}

export default Header;