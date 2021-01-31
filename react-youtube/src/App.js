import React from 'react'
import TodoList from "./Todo/TodoList";

const styles = {
    title: {
        color: 'red',
        textTransform: 'uppercase'
    }
}

function App() {
    const todos = [
        {id: 1, completed: false, title: 'Test fist'},
        {id: 2, completed: false, title: 'Test second'},
        {id: 3, completed: false, title: 'Test third'},
    ]
  return (
      <div className="wrapper">
            <h1 style={styles.title}>React tutorial</h1>
            <TodoList  todos={todos}/>
      </div>
  )
}

export default App;
