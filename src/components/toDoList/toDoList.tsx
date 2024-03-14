import React, { useState } from "react";
import { ListItemAdd } from "./listItemAdd";
import { ToDoListItem } from "./toDoListItem";

export function ToDoList() {
    const [list, setList] = useState<string[]>([]);

    return <div>
            <h2>TodoList</h2>
            <ListItemAdd onChange={(text) => { setList(list.concat(text)) }} />
            {list.length > 0 && <button onClick={() => setList([])}>Resetta</button>}
            {list.map((input, index) => <ToDoListItem
                    key={index}
                    index={index}
                    input={input}
                    onChange={indexToRemove => {
                        setList(list.filter((input, index) => index !== indexToRemove))
                    }}
                />
            )}
    </div>
}
