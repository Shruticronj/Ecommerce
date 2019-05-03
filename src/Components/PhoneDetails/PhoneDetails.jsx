import React, { Component } from 'react';
import { productList } from '../Data/productList';
import { add } from '../../Action/Index1';
import { connect } from 'react-redux';
import "./PhoneDetails.css";

class PhoneDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }

    render() {
        if (!productList)
            return <p>Loading...</p>
        return (
            <div className="Phmain-div">
                <div className="Phleft-div">
                    <img src={this.props.location.state.image} alt="phone" width="70%" height="150%"></img>
                </div>
                <div className="Phright-div">
                    <div className="Pdetails">
                        <h2>{this.props.location.state.name}</h2><br />
                        <div className='Pprice'> <h2>{this.props.location.state.price}</h2><br /></div>
                        <label><h4>Description:</h4>
                            <p>{this.props.location.state.description}</p>
                        </label>
                        <label><h4>Brand:</h4>
                            <p>{this.props.location.state.brand}</p>
                        </label>
                        <label><h4>ID:</h4>
                            <p>{this.props.location.state.id}</p>
                        </label>
                        <label><h4>Size:</h4>
                            <p>{this.props.location.state.size}</p>
                        </label>
                        <label><h4>Camera:</h4>
                            <p>{this.props.location.state.camera}</p>
                        </label>
                        <label><h4>CPU:</h4>
                            <p>{this.props.location.state.cpu}</p>
                        </label>
                        <label><h4>Memory:</h4>
                            <p>{this.props.location.state.memory}</p>
                        </label>
                        <label><h4>Display:</h4>
                            <p>{this.props.location.state.display}</p>
                        </label>
                        <label><h4>Battery:</h4>
                            <p>{this.props.location.state.battery}</p>
                        </label>
                        <hr />
                        <hr />
                    </div>
                    <div>
                        <div className="PaddToCart">
                            <button onClick={() => { this.props.addToCart(this.props.location.state) }}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch(add(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneDetails);
