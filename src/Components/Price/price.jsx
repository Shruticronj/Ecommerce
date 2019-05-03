import React from 'react';
import './price.css';
import SubPrice from '../Sub_Price/sub_price';

class Price extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: 'false',
            radio_arr: ["Low to High", "High to Low"]
        }
    }

    handleCheck = () => {
        this.setState({
            checked: !this.state.checked
        })
    }
    
    render() {
        return (
            <div>
                <div className="p1">
                    <p className='brand'><b>Price</b></p>
                </div>
                <div className="p2">
                    {this.state.radio_arr.map((item, index) => {
                        return <p key={index}><SubPrice value={item} fun={this.handleCheck} /></p>
                    })}
                </div>
            </div>
        )
    }
}

export default Price;