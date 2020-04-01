import * as React from "react";
import { Link } from "react-router-dom";
import { useItems } from "./state";

export const CheckOrder = () => {
    const { items } = useItems();

    return <div>
        <ul>
         {items.map(item => <li>{item}</li>)}
        </ul>
        <Link to="/add-order"><h4 className="back">Bearbeiten</h4></Link>
        <Link to="/order-status"><h4>Absenden</h4></Link>
    </div>
};