const TodoForm = ({ todoItem, setTodoItem, addTodo, filter, setFilter }) => {
  return (
    <div className="form-container">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault()
          addTodo()
        }}
      >
        <select
          name="todo-filter"
          className="todo-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
        <input
          type="text"
          placeholder="Add new task..."
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button type="submit" className="add-todo-btn">
          +
        </button>
      </form>
    </div>
  )
}

export default TodoForm
