import { useState } from 'react'
import InputForm from './InputForm'
import PostList from './PostList'

function App() {
  const [posts, setPosts] = useState([])
  const [inputData, setInputData] = useState({
    title: '',
    body: '',
  })
  const [editId, setEditId] = useState('')

  return (
    <div className="min-h-screen bg-neutral-800 text-white">
      <h1 className="text-center text-4xl font-bold pt-4 pb-4">CRUD App</h1>
      <InputForm
        inputData={inputData}
        setInputData={setInputData}
        setPosts={setPosts}
        editId={editId}
        setEditId={setEditId}
      />
      <PostList
        posts={posts}
        setPosts={setPosts}
        editId={editId}
        setEditId={setEditId}
        setInputData={setInputData}
      />
    </div>
  )
}

export default App
