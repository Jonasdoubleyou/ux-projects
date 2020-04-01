import * as React from "react";
import { Link } from "react-router-dom";
import { useItems } from "./state";

export const ShowList = () => {
  const { items } = useItems();

  return (
    <div>
        <h4>für Klaus R.</h4>
        <ul className="list">
            {items.map(item => <li>{item}</li>)}
        </ul>
        <Link to="/map"><h4 className="back">Zurück</h4></Link>
        <Link to="/buy"><h4>Annehmen</h4></Link>
    </div>
  );
};