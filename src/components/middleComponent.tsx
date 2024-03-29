import { MyCustomInput } from "./myCustomInput"

export function MiddleComponent(props: {
    onChange: (text: string) => void
}) {
    const {onChange} = props;
    return <>
        <MyCustomInput 
            label={"Nome"} 
            required={true} 
            onChange={onChange} />
    </>
}