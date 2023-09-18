import React, {useEffect, useState} from 'react';
import Button from "../../atoms/Button";
const Excercise1 = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Kliknięto ${count} razy`
    });
    return (
        <>
            <p>
                Kliknięto {count} razy
            </p>
            <Button text="Kliknij mnie" onClick={() => setCount(count + 1)}>
            </Button>
        </>
    )
}

export default Excercise1;