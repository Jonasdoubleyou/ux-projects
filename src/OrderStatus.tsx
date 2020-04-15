import * as React from "react";
import { useHistory } from "react-router";
import { useItems } from "./state";

export const OrderStatus = () => {
    const [state, setState] = React.useState<number>(0);
    const history = useHistory();

    React.useEffect(() => {
        const timers = [
        setTimeout(() => setState(1), 5_000),
        setTimeout(() => setState(2), 10_000),
        setTimeout(() => history.push("/arrival"), 15_000),
        ];

        return () => timers.forEach(t => clearTimeout(t));
    }, []);

    const states = [
        "In Warteschlange",
        "In Bearbeitung",
        "Auf dem Weg",
    ];

    const { items } = useItems();

    return <div>
        <h4>Bestellstatus</h4>
        <ul>
            {states.map((item, i) => <li>{item} {i <= state ? "✅": ""}</li>)}
        </ul>

        <h4>Deine Bestellung</h4>
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>
    </div>
}