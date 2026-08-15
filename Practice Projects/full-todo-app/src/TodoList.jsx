import TodoItem from './TodoItem'
const TodoList = ({
  todoList,
  removeTodo,
  checkedTodo,
  editingTodoId,
  setEditingTodoId,
  saveTodo,
}) => {
  return (
    <ul className="todo-list-container">
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            checkedTodo={checkedTodo}
            editingTodoId={editingTodoId}
            setEditingTodoId={setEditingTodoId}
            saveTodo={saveTodo}
          />
        )
      })}
    </ul>
  )
}

export default TodoList
