import React from 'react';

class SubPrice extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input type="radio" name=" " onChange={(event)=>{this.props.fun(event,this.props.text)}} />{this.props.text}
            </div>
        )
    }
}

export default SubPrice;