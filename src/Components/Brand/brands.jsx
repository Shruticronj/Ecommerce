import React from 'react';
import { filterResult } from '../../Action/Index1';
import { connect } from 'react-redux';
import SubBrand from '../Sub_Brand/sub_brand';
import './brand.css';

class Brands extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ' ',
            result: [],
            arr: ["Apple", "Huawei", "Meizu", "Samsung", "Vestel", "Xiaomi", "Asus"]
        }
    }

    handleCheck = (event, name) => {
        const tempName = name
        let filarr;
        if (!event.target.checked) {
            filarr = this.state.result.splice(this.state.result.indexOf(tempName), 0);
        } else {
            filarr = this.state.result.concat(tempName)
        }
        this.setState({
            result: filarr,
            name: tempName
        });
        this.props.dispatch(filterResult(filarr))
    }

    render() {
        return (
            <div>
                <div>
                    <p className="brand"><b>Brands</b></p>
                </div>
                {this.state.arr.map((item, index) => {
                    return (
                        <div className="outer-brand">
                            <p key={index}><SubBrand text={item} fun={this.handleCheck}/></p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        resultant_arr: state.result_arr
    }
}

export default connect(mapStateToProps)(Brands);