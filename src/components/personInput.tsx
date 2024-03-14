import { useState } from "react";

interface Person {
    label: string;
    onChange: (value: string) => void;
    value: string;
}

export function PersonInput(props: Person) {
    const { label, onChange } = props;
    const [value, setValue] = useState("");

    return (
        <div>
            <label>{label}</label>
            <input
                type="text"
                value={value}
                onChange={(ev) => {
                    const newValue = ev.target.value;
                    setValue(newValue);
                    onChange(newValue);
                    console.log(newValue);
                }}
            />
        </div>
    );
}
