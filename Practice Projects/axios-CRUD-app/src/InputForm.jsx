import { addData, updateData } from './api/postApi'

const InputForm = ({ inputData, setInputData, setPosts, editId, setEditId }) => {
  // adding data in api
  const handleAdd = async () => {
    try {
      const res = await addData(inputData)
      setPosts((prev) => [...prev, { ...res.data, id: Date.now() }])
      setInputData({ title: '', body: '' })
    } catch (error) {
      console.log('Error :', error.message)
    }
  }

  //  update the post data
  const handleEdit = async () => {
    try {
      const res = await updateData(editId, inputData)
      setPosts((prev) => prev.map((post) => (post.id === editId ? { ...post, ...res.data } : post)))
      setEditId(null)
      setInputData({ title: '', body: '' })
    } catch (error) {
      console.log('Error : ', error.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    editId ? handleEdit() : handleAdd()
  }

  return (
    <div className="max-w-6xl w-full mx-auto px-4 md:px-6 lg:px-8 py-4">
      <div className="w-full flex justify-center items-center">
        <form className="flex flex-col justify-center items-center gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Add title"
            className="w-72 md:w-96 px-2 py-1 border-2 border-gray-500 rounded-lg outline-0"
            value={inputData.title}
            onChange={(e) => setInputData({ ...inputData, title: e.target.value })}
          />
          <textarea
            name="news"
            id="news"
            rows="6"
            placeholder="Add post"
            className="w-72 md:w-96 px-2 py-1 border-2 border-gray-500 rounded-lg outline-0"
            value={inputData.body}
            onChange={(e) => setInputData({ ...inputData, body: e.target.value })}
          ></textarea>
          <button className="bg-green-600 py-1 px-6 rounded-lg cursor-pointer hover:bg-green-700">
            {editId ? 'SAVE' : 'ADD'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default InputForm
