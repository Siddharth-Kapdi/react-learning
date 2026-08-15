import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  const [todoList, setTodoList] = useState([])
  const [todoItem, setTodoItem] = useState('')
  const [filter, setFilter] = useState('all')
  const [editingTodoId, setEditingTodoId] = useState(null)

  // common function for handle empty and duplicate todo
  const handleEmptyAndDuplicate = (todoItem, todoId) => {
    const trimmedTodo = todoItem.trim()
    const isExist = todoList.some((todo) => todo.text === trimmedTodo && todo.id !== todoId)

    if (trimmedTodo === '') {
      alert("todo value can't be empty...")
      setTodoItem('')
      return
    }

    if (isExist) {
      alert('this todo is exist...')
      setTodoItem('')
      return
    }
    return trimmedTodo
  }

  // function for add todo
  const addTodo = () => {
    const trimmedTodo = handleEmptyAndDuplicate(todoItem)
    console.log(trimmedTodo)

    if (!trimmedTodo) return

    const newTodo = {
      id: Date.now(),
      text: trimmedTodo,
      completed: false,
    }

    setTodoList((prev) => [...prev, newTodo])
    setTodoItem('')
  }

  // function for remove todo
  const removeTodo = (todoId) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))
  }

  // function for checked todo
  const checkedTodo = (todoId) => {
    setTodoList((prevTodo) =>
      prevTodo.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo))
    )
  }

  // function for filter todo
  const filteredTodo = todoList.filter((todo) => {
    if (filter === 'all') return todo
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
  })

  // function for save todo when editing
  const saveTodo = (todoId, newText) => {
    const trimmedTodo = handleEmptyAndDuplicate(newText, todoId)
    if (!trimmedTodo) return
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => (todo.id === todoId ? { ...todo, text: trimmedTodo } : todo))
    )
  }

  return (
    <div className="container">
      <div className="todo-container">
        <h1 className="heading">Your To Do</h1>
        <TodoForm
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          addTodo={addTodo}
          filter={filter}
          setFilter={setFilter}
        />
        <TodoList
          todoList={filteredTodo}
          removeTodo={removeTodo}
          checkedTodo={checkedTodo}
          editingTodoId={editingTodoId}
          setEditingTodoId={setEditingTodoId}
          saveTodo={saveTodo}
        />
        <div className="todo-counts">
          <p className="total-todos">Your total todos : {todoList.length}</p>
          <p className="completed-todos">
            Your remaining todos : {todoList.filter((todo) => !todo.completed).length}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
