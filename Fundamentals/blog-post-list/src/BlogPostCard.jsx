const BlogPostCard = ({ post }) => {
  const { title, date, excerpt, image } = post

  const todaysDate = new Date().getTime()

  const isNew = (date, todaysDate) => {
    const blogPostDate = new Date(date).getTime()

    const diffMs = todaysDate - blogPostDate
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    return diffDays <= 7
  }

  return (
    <div className="blog-post-card">
      {isNew(date, todaysDate) ? <p className="new-tag">New</p> : null}
      <img src={image} alt={title} width={250} />
      <div>
        <h2 className="blog-title">{title}</h2>
        <p className="blog-date">{date}</p>
        <p className="blog-excerpt">{excerpt}</p>
      </div>
    </div>
  )
}

export default BlogPostCard
