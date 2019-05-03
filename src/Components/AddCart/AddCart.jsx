import React, { Component } from 'react';
import Delete from '../Delete/delete';
import { connect } from 'react-redux';
import { increment, decrement, delData } from '../../Action/Index1';
import './AddCart.css';

class AddCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0
         };
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.flags) {
            this.calculateTotal(nextProps);
        }
    }

    componentDidMount = () => {
        this.calculateTotal(this.props);
    }

    calculateTotal = (data) => {
        let totalPrice = 0;
        data.items.forEach((item) => {
            const amt = parseFloat(item.price.replace(/,/g, '')) * (item.count);
            totalPrice += amt;
        })
        this.setState({
            totalPrice
        });
    }

    render() {
        if (!this.props.items && !this.props.items.length > 0)
            return <p>There is no product in your cart.Please add some.</p>
        return (
            <div>
                <div className="first">
                    <p>Shipping Cart</p>
                </div>
                {this.props.items.length === 0 ?
                    <div className="second"><p><b>There is no item in the cart.</b></p></div> :
                    <div className="second">
                        {
                            this.props.items.map(item => {
                                return (
                                    <div className="second_one">
                                        <div className="img">
                                            <img width="100px" height="100px" src={item.image} alt="phone"></img>
                                        </div>
                                        <div className="details">
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p><br />
                                        </div>
                                        <div className="plus-minus">
                                            <h3>{item.price}$x</h3>
                                            <h3>{item.count}</h3>
                                        </div>
                                        <div className="add">
                                            <button onClick={() => { this.props.dispatch(increment(item)) }}>+</button>
                                            <button onClick={() => { this.props.dispatch(decrement(item)) }}>-</button>
                                        </div>
                                        <div className="del">
                                            <button onClick={() => { this.props.dispatch(delData(item)) }}><Delete />
                                            </button></div>
                                    </div>
                                )
                            })}</div>}
                <div className="third">
                    <p>Total Price:</p>
                    {this.props.items.length !== 0 ?
                        <div>
                            {this.state.totalPrice}$
                        </div>
                        : <div><p>0$</p></div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cart_arr,
        flags: state.flag
    };
}

export default connect(mapStateToProps)(AddCart);