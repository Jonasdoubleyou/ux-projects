import { useState, useEffect } from "react";

// bad boys, bad boys, what you gonna do, what you gonna do when they come for you
let globalItems = ["Bananen - 2 Stück", "Milch - 5L", "Nutella - 100g"] as string[]; 
let globalRecipe = "";

export function useItems() {
    const [items, setItems] = useState(globalItems);

    useEffect(() => {
      globalItems = items;
    }, [items]);

    const addItem = (item: string) => 
        setItems(items => [...items, item]);

    const removeItem = (item: string) =>
        setItems(items => items.filter(it => it !== item));

    return { items, addItem, removeItem, setItems };
}

export function useRecipe() {
    const [recipe, setRecipe] = useState(globalRecipe);

    useEffect(() => {
        globalRecipe = recipe;
    }, [recipe]);

    return { recipe, setRecipe };
}