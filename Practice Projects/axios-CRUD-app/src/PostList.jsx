import PostCard from './PostCard'
import { useEffect } from 'react'
import { getData } from './api/postApi'

const PostList = ({ posts, setPosts, setEditId, setInputData }) => {
  // fetching data from api
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getData()
      setPosts(res.data)
    }
    fetchPosts()
  }, [setPosts])

  return (
    <div className="max-w-6xl w-full mx-auto px-4 md:px-6 lg:px-8 py-4">
      <ol className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-decimal list-inside space-y-1">
        {posts.map((post) => (
          <li key={post.id} className="bg-neutral-700 px-4 py-2 rounded-lg">
            <PostCard
              post={post}
              posts={posts}
              setPosts={setPosts}
              setEditId={setEditId}
              setInputData={setInputData}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}
export default PostList
