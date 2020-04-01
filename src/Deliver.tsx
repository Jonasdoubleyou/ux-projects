import * as React from "react";
import { Link } from "react-router-dom";


export const Deliver = () => (
    <div>
        <ul className="list">
            <li>
                Klaus R.
            </li>
            <li>
                Hauptstraße 24
            </li>
            <li>
                1. OG
            </li>
            <li>
                77815 Bühl
            </li>
        </ul>

        <Link to="/"><h4>Fertig!</h4></Link>
    </div>
)