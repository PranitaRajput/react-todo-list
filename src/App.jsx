import {useState} from "react"
import "./styles.css"

export default function App () {
  const [newItem, setNewItem] = useState ("")
  const [todos, setTodos] = useState([])
  //newItem = 'sdfdhdgh' this wont work as we can not change the value of state variable in react 
  // so to make our code work we need to call a function  setNewItem and need to pass the value to it
  //setNewItem('')     //now this function will update the value of newItem to the value we pass to it 

  function handleSubmit (e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title: newItem, completed:false},
      ]
    })

    setNewItem('')
  }

  function toggleTodo(id, completed) {
      setTodos(currentTodos => {
        return currentTodos.map((todo) => {
          if  (todo.id === id) {
            return {...todo, completed}
          }

          return todo;
        })
      })
  }

  function deleteTodo(id) {
    setTodos (currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return ( 
  <>
  <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text" 
        id="item"/>
      </div>
      <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.length === 0 && "No Todos"}  
    {/* whatever we put in curly brases runs the javascript logic  */}
    {todos.map((todo) => {
      return ( 
      <li key={todo.id}>
      <label>
        <input type="checkbox" 
        checked={todo.completed}
        onChange={e => toggleTodo(todo.id, e.target.checked)}/>
        {todo.title}
      </label>
      <button onClick= {() => deleteTodo(todo.id)}
      className="btn btn-danger"
      >Delete</button>
    </li>
      )
    })} 

  </ul>
  </>
  )

  // <h1 className="header">Todo List</h1>  This will show an error 
  // as in rect we can only ever return one element in one component  So here we can only return form if try to retun
  // another element (eg. h1) it will throw an error 
  //so to return multiple elements we need to rap it in a div or fragment (<>  </>) simple opening and closing tags 
}