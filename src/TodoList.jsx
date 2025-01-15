import { TodoItem } from "./TodoItem"
import PropTypes from "prop-types"  

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired, // `id` must be a string
        title: PropTypes.string.isRequired, // `title` must be a string
        completed: PropTypes.bool.isRequired, // `completed` must be a boolean
      })
    ).isRequired, // `todos` must be an array of objects with the specified shape
    toggleTodo: PropTypes.func.isRequired, // `toggleTodo` must be a function
    deleteTodo: PropTypes.func.isRequired, // `deleteTodo` must be a function
  };

