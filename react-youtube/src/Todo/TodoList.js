import React from "react"
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const styles = {
    ul: {
      listStyle: 'none',
      color: 'green',
        margin: 0,
        padding: 0
    }
};

  function TodoList(props) {
    return(
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return  <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onCom}/>
            })}
        </ul>
    )
}

// props описание типов c помошью prop-types, валидация
TodoList.propTypes = {
      //todos - это массив состоящий из объектов с обязательным содержанием
      todos: PropTypes.arrayOf(PropTypes.object).isRequired,
      onCom: PropTypes.func.isRequired
}


export default TodoList