import PropTypes from "prop-types";


export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </li>
    )
  }

  TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired, // Boolean, required
    id: PropTypes.string.isRequired,     // String, required
    title: PropTypes.string.isRequired,  // String, required
    toggleTodo: PropTypes.func.isRequired, // Function, required
    deleteTodo: PropTypes.func.isRequired, // Function, required
  };