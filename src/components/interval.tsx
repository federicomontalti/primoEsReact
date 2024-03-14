import { useEffect, useState } from "react";

export default function Interval() {
    const [increasingNumber, setIncreasingNumber] = useState(0);
    useEffect(() => {
        const intervalRef = setInterval(() => {
            console.log("interval: ", increasingNumber); //rimane sempre 0 --> guardare Closures Javascript
            setIncreasingNumber(prevNumber => prevNumber + 1)}, 1000);
        return () => clearInterval(intervalRef); 
    }, []);
    return <div>Interval value: {increasingNumber}</div>;
}