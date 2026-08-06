import { Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'

function TodoList() {
  const [todoItem, setTodoItem] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleAddTodo = () => {
    const trimmedTodo = todoItem.trim()
    if (trimmedTodo === '') return

    const isExist = todoList.some((todo) => todo.description === trimmedTodo)
    if (isExist) {
      return
    }

    const newItem = {
      id: Date.now(),
      description: trimmedTodo,
    }
    setTodoList((prev) => [...prev, newItem])
    setTodoItem('')
  }

  const handleDeleteTodo = (id) => {
    setTodoList((prev) => prev.filter((item) => id !== item.id))
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter your todo"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />

        <button onClick={handleAddTodo}>
          <Plus />
        </button>
      </div>

      <ul className="todo-list">
        {todoList.map((todo) => (
          <li key={todo.id}>
            <span>{todo.description}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
      {todoList.length > 0 && (
        <button className="all-clear-btn" onClick={() => setTodoList([])}>
          All clear
        </button>
      )}
    </div>
  )
}

export default TodoList
