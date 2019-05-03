import React from 'react';
import del from './del.jpg';

class Delete extends React.Component {
    render() {
        return (
            <div>
                <img alt='logo' width="25px" height="25px" src={del}></img>
            </div>
        )
    }
}

export default Delete;