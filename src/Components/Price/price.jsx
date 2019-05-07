import React from 'react';
import './price.css';
import SubPrice from '../Sub_Price/sub_price';
import {filterPrice} from '../../Action/Index1';
import {connect} from 'react-redux';

class Price extends React.Component {
    constructor() {
        super();
        this.state = {
            radio_arr: ["Low to High", "High to Low"],
            result: []
        }
    }

    handleCheck = (event, name) => {
        const pName = name;
        let pfilarr;
        if (!event.target.checked) {
            pfilarr = this.state.result.splice(this.state.result.indexOf(pName), 0);
            } else {
            pfilarr = this.state.result.concat(pName)
            }
            this.setState({
                result: pfilarr,
                name: pName
            });
            this.props.dispatch(filterPrice(name))
        }
    
    render() {
        console.log("Resultant array--->>>",this.props.resultant_arr)
        return (
            <div>
                <div className="p1">
                    <p className='brand'><b>Price</b></p>
                </div>
                <div className="p2">
                    {this.state.radio_arr.map((item, index) => {
                        return <p key={index}><SubPrice text={item} fun={this.handleCheck} /></p>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        resultant_arr: state.filter_arr
    }
}
export default connect(mapStateToProps)(Price);