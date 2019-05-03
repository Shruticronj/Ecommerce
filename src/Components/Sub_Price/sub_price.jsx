import React from 'react';

class SubPrice extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input type="radio" value="add" onChange={this.props.fun} />{this.props.value}
            </div>
        )
    }
}

export default SubPrice;