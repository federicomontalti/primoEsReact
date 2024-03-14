import React, { useState } from "react";
import { ListItemAdd } from "./listItemAdd";

export function ToDoListItem(props: {
    readonly input: string,
    readonly index: number,
    onChange: (index: number) => void
}) {
    const { input, index, onChange } = props;

    return (
        <div>Index: {index} - Input: {input} 
        <button onClick={() => onChange(index)}>X</button></div>
    );
}
