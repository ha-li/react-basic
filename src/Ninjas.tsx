import React, {useState, useEffect, useRef} from 'react';


export function Ninjas() {
    const [loading, setLoading] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect( () => {
        if (!loading) {
            inputRef.current?.focus();
        }
        setLoading(false);
    }, [])

    function logRef() {
        console.log("The element ", inputRef.current);
    }



    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <input ref={inputRef} type="text" onInput={logRef}/>
            )}
        </div>
    )
}