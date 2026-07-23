import { useState } from 'react'

const TodoList = () => {
  const [todoItem, setTodoItem] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleAddBtn = () => {
    setTodoList((prev) => {
      const isExist = prev.some(
        (item) => item.description.trim().toLowerCase() === todoItem.trim().toLocaleLowerCase()
      )

      if (isExist || todoItem === '') {
        return prev
      }

      return [
        ...prev,
        {
          id: Date.now(),
          description: todoItem.trim(),
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
      <div className="add-todo-section">
        <input
          type="text"
          name="input-todo"
          id="input-todo"
          placeholder="Add todo here..."
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button id="add-todo-btn" onClick={handleAddBtn}>
          Add todo
        </button>
      </div>

      <div className="todo-item-section">
        {todoList.map((todo) => {
          return (
            <div className="todo" key={todo.id}>
              <p className="todo-name">{todo.description}</p>
              <span className="todo-delete-btn" onClick={() => handleRemoveBtn(todo.id)}>
                ❌
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
