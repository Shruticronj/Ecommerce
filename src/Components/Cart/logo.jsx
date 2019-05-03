import React from 'react';
import Cart from './cart.png';

class Logo extends React.Component {
    render() {
        return (
            <div className='logo'>
                <img alt='logo' src={Cart}></img>
            </div>
        )
    }
}

export default Logo;
