import React, { useState } from "react";
import { Button } from "antd";

export function ListItemAdd(props: {
    readonly onChange: (text: string) => void
}) {
    const { onChange } = props;
    const [text, setText] = useState("");

    return (
        <div>
            <label>Aggiungi elemento: </label>
            <input type="text" value={text} onChange={ev => setText(ev.target.value)} />
            <Button type="primary" onClick={() => {
                onChange(text);
                setText("");
            }}>Conferma</Button>
        </div>
    );
}
