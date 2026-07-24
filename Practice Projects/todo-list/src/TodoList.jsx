import { useState } from 'react'

const TodoList = () => {
  const [todoItem, setTodoItem] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleAddBtn = () => {
    const trimmedTodo = todoItem.trim()

    setTodoList((prev) => {
      const isExist = prev.some(
        (item) => item.description.trim().toLowerCase() === trimmedTodo.toLowerCase()
      )

      if (isExist || trimmedTodo === '') {
        return prev
      }

      return [
        ...prev,
        {
          id: Date.now(),
          description: trimmedTodo,
        },
      ]
    })
    setTodoItem('')
  }

  const handleRemoveBtn = (id) => {
    setTodoList((prev) => prev.filter((item) => id !== item.id))
  }

  return (
    <div className="todo-container">
      <form
        className="add-todo-section"
        onSubmit={(e) => {
          e.preventDefault()
          handleAddBtn()
        }}
      >
        <input
          type="text"
          name="input-todo"
          id="input-todo"
          placeholder="Add todo here..."
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button type="submit" id="add-todo-btn">
          Add todo
        </button>
      </form>

      <ol className="todo-item-section">
        {todoList.map((todo) => {
          return (
            <li className="todo" key={todo.id}>
              <p className="todo-name">{todo.description}</p>
              <span className="todo-delete-btn" onClick={() => handleRemoveBtn(todo.id)}>
                ❌
              </span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default TodoList
