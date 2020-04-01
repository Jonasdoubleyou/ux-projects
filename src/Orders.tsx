import * as React from "react";
import { Link } from "react-router-dom";

export const Orders = () => {
    return (
        <div>
            <i>Bisher noch keine Bestellungen</i>
            <br/>
            <br/>
            <Link to="/add-order"><h4>Bestellung aufgeben</h4></Link>
        </div>
    );
};