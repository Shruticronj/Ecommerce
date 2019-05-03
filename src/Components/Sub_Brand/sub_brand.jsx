import React from 'react';

class SubBrand extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    onChange={(event) => { this.props.fun(event, this.props.text) }} 
                />
                {this.props.text}
            </div>
        )
    }
}

export default SubBrand;