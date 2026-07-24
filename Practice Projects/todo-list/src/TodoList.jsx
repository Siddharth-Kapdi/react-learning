import { useState } from 'react'

const TodoList = () => {
  const [todoItem, setTodoItem] = useState('')
  const [todoList, setTodoList] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [editedItem, setEditedItem] = useState('')

  // Adding todo in todo list
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

  // Remove todo in todo list
  const handleRemoveBtn = (id) => {
    setTodoList((prev) => prev.filter((item) => id !== item.id))
  }

  // Select particular todo for editing where Id match
  const handleEditBtn = (id) => {
    todoList.find((item) => {
      if (item.id === id) {
        setEditingId(id)
        setEditedItem(item.description)
      }
    })
  }

  // After editing todo save todo (without empty value and same value and character length > 50 )
  const handleSaveTodoBtn = (todoId, editedTodoItem) => {
    const trimmedTodo = editedTodoItem.trim()
    const isExist = todoList.some(
      (item) =>
        item.id !== todoId && item.description.trim().toLowerCase() === trimmedTodo.toLowerCase()
    )

    if (isExist || trimmedTodo === '' || trimmedTodo.length > 50) {
      alert('Do not allow (same value) and (empty value) and (>50 characters) !!')
      return
    }

    setTodoList((prev) =>
      prev.map((item) => (item.id === todoId ? { ...item, description: trimmedTodo } : item))
    )
    setEditingId(null)
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
              {todo.id === editingId ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSaveTodoBtn(todo.id, editedItem)
                  }}
                >
                  <input
                    className="edit-todo-name"
                    value={editedItem}
                    onChange={(e) => setEditedItem(e.target.value)}
                  />
                  <button type="submit" className="save-todo-btn">
                    ✅
                  </button>
                </form>
              ) : (
                <>
                  <p className="todo-name">{todo.description}</p>
                  <button className="edit-todo-btn" onClick={() => handleEditBtn(todo.id)}>
                    ✏️
                  </button>
                  <button className="todo-delete-btn" onClick={() => handleRemoveBtn(todo.id)}>
                    ❌
                  </button>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default TodoList
