import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../Cart/logo';
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='header'>
               <div><Link to='/'><p className="eco">Ecommerce</p></Link></div>
                <div className='logo'>
                    <Logo />
                </div>
                <div className="cart1">
                    <Link to='/cart'><div className="cart2"><p>Cart(<span>{this.props.count}</span>)</p></div></Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.cart_arr.length
    };
}

export default connect(mapStateToProps)(Header);