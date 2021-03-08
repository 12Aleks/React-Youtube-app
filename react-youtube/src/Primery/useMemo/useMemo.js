import React, {useState, useMemo, useEffect} from 'react'


function complexCompute(num) {
    console.log('complexCompute')
    let i = 0;

    while(i < 1000000000) i++;

    return num * 2
}

export default function UseMemoFun() {
    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false)


    // const computed = complexCompute(number);
    //const styles = {color: colored ? 'green': 'black'}
    const computed = useMemo(() => {
        return complexCompute(number);
    }, [number]);

    const styles = useMemo(() => ({
        color: colored ? 'green': 'black'
    }), [colored]);
s

    useEffect(() =>{
        console.log('Styles')
    },[styles])

    return(
        <div>
            <h1 style={styles}>Number = {computed}</h1>
            <button className="btn btn-success" onClick={() => setNumber(prevNumber => prevNumber + 1)}>Add</button>
            <button className="btn btn-danger" onClick={() => setNumber(prevNumber => prevNumber - 1)}>Delete</button>
            <button className="btn btn-warning" onClick={() => setColored(prevNumber => !prevNumber)}>Colored</button>
        </div>
    )
}