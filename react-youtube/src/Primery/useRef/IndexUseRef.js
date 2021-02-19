import React, {useState, useEffect, useRef} from 'react'

export default function Ref() {
    const [count, setCount] = useState(1);
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('');
    const refTitle= useRef(null)

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current.value)
    });

    useEffect(() =>{
        prevValue.current = count
    }, [count])

    const focus = () => inputRef.current.focus()
    const updateColor = () => {
      refTitle.current.style.color = 'green'
    };
    return (
        <div>
           <h1 ref={refTitle} >{renderCount.current}</h1>
           <h1>{ prevValue.current}</h1>
            <button onClick={updateColor}>UpdateColor</button>
            <input ref={inputRef} type="text" value={count} onChange={e => setCount(e.target.value)}/>
            <button className="btn btn-success" onClick={focus}>Fokus</button>
        </div>
    )
}