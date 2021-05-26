import React, {useEffect, useState} from 'react';
import Context from "./IndexUseContext";
import ChildComponent from "./ChildComponent";


const IndexMain = () => {
    const employees = [
        "Jennifer Pantano",
        "Glen Legaspi",
        "Meagan Whiteman",
        "Matthew King",
        "Cynthia Thomas",
        "Ray Schaefer",
        "Marco Rucker",
        "Tim Howard",
        "Rosalyn Tyson"
    ];
    const [state, setState] = useState({
        user: {
            name: 'Bob',
            status: 'admin',
            job: 'developer'
        },
        name: ''

    });

    const [query, setQuery] = useState("");
    const [todo, setTodo] = useState([])


    useEffect(() => {
        // async function data(){
        //  let info =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
        //  let todos = await info.json()
        //  setTodo(todos)
        // }
        // data()

        fetch('/article/fetch/logo-fetch.svg')
            .then(data => data.headers)
            .then(newJson => setTodo(newJson))


    }, [])
    // const [name, setName] = useState('Bob');
    // const [age, setAge] = useState(40);
    //
    // useEffect(() => {
    //     document.title = `Привет ${name}`;
    //     console.log("useEffect");
    // },[])


    // function updateStatus() {
    //     const inp = nameDRef.current.value
    //     setState(prevState => ({
    //             user: {
    //                 ...prevState.user,
    //                 name:  nameDRef.current.value,
    //                 status: 'user'
    //             },
    //             name: '',
    //
    //         }
    //     ))
    // }
    const onChange = (event) => setQuery(event.target.value)
    const filterUpdate = employees.filter((name) => {
        return name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })

    // const changeName = (event) => setName(event.target.value);
    // const changeAge = (event) => setAge(event.target.value);

    return (
        <Context.Provider value={{state}}>
            <input type="text" value={query} onChange={onChange}/>
            {/*<pre>{JSON.stringify(state.user, null, 2)}</pre>*/}
            {/*<p>{state.name}</p>*/}
            {/*<hr/>*/}
            {/*<p>{name}</p>*/}
            {/*<p>{age}</p>*/}
            {/*<p>Имя: <input type="text" value={name} onChange={changeName}/></p>*/}
            {/*<p>Возраст: <input type="number" value={age} onChange={changeAge}/></p>*/}

            {
                filterUpdate.map((user, index) => (
                    <p key={index}>{index + 1}. {user}</p>
                ))
            }
            <ChildComponent/>
         <p>{todo}</p>
            <pre>{JSON.stringify(todo, null, 2)}</pre>
            <input type="text"/>
            {/*<button onClick={() => updateStatus()}>Click</button>*/}
        </Context.Provider>
    );

}

export default IndexMain
