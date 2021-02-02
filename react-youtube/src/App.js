import React from 'react'
import TodoList from "./Todo/TodoList";
import Context from "./context";

const styles = {
    title: {
        color: 'red',
        textTransform: 'uppercase'
    }
}

function App() {
    const [todos, setTodos] = React.useState(
        [
            {id: 1, completed: false, title: 'Test fist'},
            {id: 2, completed: false, title: 'Test second'},
            {id: 3, completed: false, title: 'Test third'},
        ]
    )

    function onComTodo(id) {
        console.log(id);
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
      setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <Context.Provider value={{removeTodo}}>
        <div className="wrapper">
            <h1 style={styles.title}>React tutorial</h1>
            <TodoList todos={todos} onCom={onComTodo}/>
        </div>
        </Context.Provider>
    )
}

export default App;
