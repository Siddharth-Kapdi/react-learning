import BlogPostCard from './BlogPostCard'

const BlogPostList = ({ posts }) => {
  if (posts.length === 0) return <p className="empty-post">No posts yet.</p>
  return (
    <div className="blog-post-list">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default BlogPostList
