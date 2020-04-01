import * as React from "react";
import { useHistory } from "react-router";
import { useItems } from "./state";

export const OrderStatus = () => {
    const [state, setState] = React.useState<string>("In Warteschlange");
    const history = useHistory();

    React.useEffect(() => {
        setTimeout(() => setState("In Bearbeitung"), 5_000);
        setTimeout(() => setState("Auf dem Weg"), 10_000);
        setTimeout(() => history.push("/arrival"), 15_000);
    }, []);

    const { items } = useItems();
    
    return <div>
        <h4>Bestellstatus: {state} </h4>
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>
    </div>
}