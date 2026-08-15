import { useState } from 'react'

const TodoItem = ({ todo, removeTodo, checkedTodo, editingTodoId, setEditingTodoId, saveTodo }) => {
  const [draftText, setDraftText] = useState(todo.text)

  // function to start editing a todo item
  const startEditing = () => {
    setDraftText(todo.text)
    setEditingTodoId(todo.id)
  }

  // function to handle saving the edited todo item
  const handleDone = () => {
    saveTodo(todo.id, draftText)
    setEditingTodoId(null)
  }
  return (
    <li className="todo">
      {editingTodoId === todo.id ? (
        <>
          <div className="todo-text-status">
            <input
              type="text"
              className="edit-input"
              value={draftText}
              onChange={(e) => setDraftText(e.target.value)}
            />
          </div>

          <div className="btns">
            <button className="done-btn" onClick={handleDone}>
              ✓
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="todo-text-status">
            <input
              type="checkbox"
              name="completed-todo"
              id={`completed-todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => checkedTodo(todo.id)}
            />
            <p className={`todo-text ${todo.completed ? 'completed' : ''}`}>{todo.text}</p>
          </div>
          <div className="btns">
            <button className="edit-btn" onClick={() => startEditing()}>
              🖉
            </button>
            <button className="remove-btn" onClick={() => removeTodo(todo.id)}>
              X
            </button>
          </div>
        </>
      )}
    </li>
  )
}

export default TodoItem
