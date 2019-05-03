import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Body from "../Body/body";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
import AddCart from "../AddCart/AddCart";

class Routes extends Component {
    
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route exact path="/PhoneDetails" component={PhoneDetails} />
                    <Route path="/cart" component={AddCart} />
                </Switch>
            </div>
        )
    }
}

export default Routes;