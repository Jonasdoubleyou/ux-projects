import * as React from "react";
import { Link } from "react-router-dom";

export const Help = () => (
    <div>
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Alter" step="1" min="0" />
        <input type="text" placeholder="Straße, Hausnummer" />
        <input type="text" placeholder="Ort" />
        <input type="text" placeholder="Postleitzahl" />
        <input type="text" placeholder="Telefonnummer" />
        <input type="text" placeholder="Email (optional)" />
        <Link to="/map"><h4>Weiter</h4></Link>
    </div>
);