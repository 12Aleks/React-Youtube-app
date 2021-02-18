import React, {useEffect} from 'react'

export default function IndexEffect() {
    const [type, setType] = React.useState('users');
    const [data, setData] = React.useState([]);
    const [pos, setPos] = React.useState({
        x: 0, y:0
    })


    // useEffect(() => {
    //    console.log('render')
    // })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}/`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type]);


    const mouseMove = event => {
        setPos({x: event.clientX, y: event.clientY})
    }

    useEffect(() => {
        console.log('ComponentDidMount')
        window.addEventListener('mousemove', mouseMove)

        return () =>{
            window.removeEventListener('mousemove', mouseMove)
        }
    }, []);



    return(
        <div>
            <p>Resurs type: {type}</p>
            <button onClick={() => setType('todos')}>Todos</button>
            <button onClick={() => setType('users')}>Users</button>
            <button onClick={() => setType('posts')}>Posts</button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    )
}