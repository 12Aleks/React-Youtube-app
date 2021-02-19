import React from 'react'
// import Index from "./ReactContext/IndexComponent";
// import IndexEffect from "./Primery/useEffect/indexEffect";
import Ref from "./Primery/useRef/IndexUseRef";


// const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

// const styles = {
//     title: {
//         color: 'red',
//         textTransform: 'uppercase'
//     }
// }

function App() {
//     const [todos, setTodos] = React.useState([]);
//     const [loading, setLoading] = React.useState(true)

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    //         .then(response => response.json())
    //         .then(todos => {
    //             setTimeout(() => {
    //                 setTodos(todos)
    //                 setLoading(false)
    //             }, 2000)
    //         })
    // }, [])
    //
    // function onComTodo(id) {
    //     console.log(id);
    //     setTodos(
    //         todos.map(todo => {
    //             if (todo.id === id) {
    //                 todo.completed = !todo.completed
    //             }
    //             return todo
    //         })
    //     )
    // }
    //
    // function removeTodo(id) {
    //     setTodos(todos.filter(todo => todo.id !== id))
    // }
    //
    // function addTodo(title) {
    //     setTodos(todos.concat([{
    //         title,
    //         id: Date.now(),
    //         completed: false
    //     }]))
    // }

    return (
        <div>

        {/*<Context.Provider value={{removeTodo}}>*/}
        {/*    <div className="wrapper">*/}
        {/*        <h1 style={styles.title}>Task list:</h1>*/}
        {/*        <ListUsers/>*/}
        {/*        <Modal/>*/}
        {/*         <React.Suspense fallback={<p>Loading ....</p>}>*/}
        {/*             <AddTodo onCreate={addTodo}/>*/}
        {/*         </React.Suspense>*/}
        {/*        {loading && <Loader/>}*/}
        {/*        {todos.length ? (<TodoList todos={todos} onCom={onComTodo}/>)*/}
        {/*            : loading? null :( <p>No todos!</p>)*/}
        {/*        }*/}
        {/*    </div>*/}
        {/*</Context.Provider>*/}
          <Ref/>
          {/*<IndexEffect/>*/}
          {/*<Index/>*/}
        </div>
    )
}

export default App;
