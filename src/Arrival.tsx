import * as React from "react";
import { useRecipe } from "./state";

export const Arrival = () => {
const { recipe } = useRecipe();

  return (
    <div>
        <h4>Bestellung ist gleich da!</h4>
        Hier die Rechnung:
        <img src={recipe} style={{ width: "90%", height: "auto" }} />
        <br/>
        Bitte halte <b>17,50€</b> bereit.<br/>
        <i>Mit einem Trinkgeld kannst du deinem Helfer eine Freude machen!</i>
    </div>
  );
};