import * as React from "react";
import { Link } from "react-router-dom";
import { useItems } from "./state";

export const Buy = () => {
    const [chosen, setChosen] = React.useState<{ [item: string]: boolean }>({});

    const toggle = (item: string) => 
        setChosen(items => ({ ...items, [item]: !items[item] }));

    const Item = ({ item }: { item: string }) => (
        <li onClick={() => toggle(item)} className={chosen[item] ? "selected" : ""}>
            {item}
        </li>
    );

    const { items } = useItems();

    const allDone = items.every(item => chosen[item]);
    const noneDone = !items.some(item => chosen[item]);

    return (
    <div>
        <ul className="list">
            {items.map(item => <Item item={item} />)}
        </ul>
        {noneDone && <i>Klicke auf gekaufte Sachen!</i>}
        {allDone && <Link to="/recipe"><h4>Gekauft!</h4></Link>}
    </div>
    );
};
