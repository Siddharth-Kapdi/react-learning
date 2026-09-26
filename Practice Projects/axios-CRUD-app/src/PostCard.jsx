import { deleteData } from './api/postApi'

const PostCard = ({ post, posts, setPosts, setEditId, setInputData }) => {
  const { id, title, body } = post
  // delete data from api
  const handleDelete = async (id) => {
    try {
      const res = await deleteData(id)
      const newPosts = posts.filter((post) => post.id !== id)
      setPosts(newPosts)
      console.log(res.data)
    } catch (error) {
      console.log('Error : ', error.message)
    }
  }

  // fills the input fields
  const startEditing = (post) => {
    setEditId(post.id)
    setInputData({ title: post.title, body: post.body })
  }

  return (
    <div className="min-h-60 md:min-h-80 flex flex-col justify-between items-start gap-4">
      <div className="flex flex-col gap-2 mt-2">
        <p>
          <span className="font-bold">Title :</span> {title}
        </p>
        <p>
          <span className="font-bold">News :</span> {body}
        </p>
      </div>
      <div className="w-full flex justify-center gap-2">
        <button
          className="bg-green-600 py-1 px-5 rounded-lg cursor-pointer hover:bg-green-700"
          onClick={() => {
            setEditId(id)
            startEditing(post)
          }}
        >
          EDIT
        </button>
        <button
          className="bg-rose-600 py-1 px-5 rounded-lg cursor-pointer hover:bg-rose-700"
          onClick={() => handleDelete(id)}
        >
          DELETE
        </button>
      </div>
    </div>
  )
}

export default PostCard
