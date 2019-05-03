import React from 'react';
import { Link } from 'react-router-dom';
import './phones.css';

class Phones extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.item || this.props.item.length < 0)
            return <p>Loading...</p>
        return (
            <div className="phones">
                <div><img alt="phone" width="100%" height="80%" src={this.props.item.image}></img></div>
                <div>
                    <Link to={{
                        pathname: '/PhoneDetails', state: {
                            name: this.props.item.name, id: this.props.item.id, price: this.props.item.price, description: this.props.item.description,
                            image: this.props.item.image, brand: this.props.item.brand, size: this.props.item.size, cpu: this.props.item.cpu, memory: this.props.item.memory,
                            camera: this.props.item.camera, display: this.props.item.display, battery: this.props.item.battery
                        }
                    }}>{this.props.item.name}
                    </Link>
                    <h2>{this.props.item.price}</h2>
                    <p>{this.props.item.description}</p>
                </div>
                <div>
                    <button>ADD TO CART</button>
                </div>
            </div>
        )
    }
}

export default Phones;