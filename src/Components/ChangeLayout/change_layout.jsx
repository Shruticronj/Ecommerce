import React from 'react';
import './change_layout.css';
class ChangeLayout extends React.Component {
    constructor(props){
        super(props);
        this.state={
            flag:true
        }
    }
    
    render() {
        return (
            <div>
                <div className="cl1">
                    <p className="para"> <b>Change Layout:</b></p>
                    <div className="cl2" onClick={()=>{this.props.myfun(this.state.flag)}}> 
                        <div className="cl3"></div>
                        <div className="cl3"></div>
                        <div className="cl3"></div>
                    </div>
            
                    <div className="cl4" onClick={()=>{this.props.myfun(!this.state.flag)}}>
                        <div className="cl5"></div>
                        <div className="cl5"></div>
                        <div className="cl5"></div>
                        <div className="cl5"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChangeLayout;