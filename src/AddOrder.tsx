import * as React from "react";
import { Link } from "react-router-dom";
import { useItems } from "./state";

export const AddOrder = () => {
    const { items, addItem, removeItem } = useItems();


    const inp = React.useRef<HTMLInputElement>(null);


    function submit(event: any) {
      if(event.key === 'Enter') {
         if(!inp.current?.value) return;
         addItem(inp.current!.value);
         inp.current!.value = "";
      }
    }

    return <div>
        <ul className="list">
            <input ref={inp} type="text" placeholder="Warenname" onKeyDown={submit} />
            {items.map(item => <li onClick={() => removeItem(item)}>{item} [X]</li>)}
            {!!items.length && <Link to="/check-order"><h4>Weiter</h4></Link>}
        </ul>
    </div>

};