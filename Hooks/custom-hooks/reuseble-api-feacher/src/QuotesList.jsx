import { useState } from 'react'
import useFetch from './components/useFetch'

const QuotesList = () => {
  const [limit, setLimit] = useState(5)
  const url = `https://dummyjson.com/quotes?limit=${limit}`
  const { data, loading, error } = useFetch(url)
  if (loading) return <p className="loading">Loading...</p>
  if (error) return <p className="error">Error: {error}</p>

  console.log(data)
  return (
    <div className="quote-list">
      <br />
      <h1>Quotes</h1>
      <br />
      <div className="q-list">
        {data?.quotes?.map((item) => (
          <div className="quote-card" key={item.id}>
            <p>"{item.quote}"</p>
            <span>— {item.author}</span>
          </div>
        ))}
      </div>
      <button onClick={() => setLimit((prev) => prev + 1)}>Add Quote</button>
    </div>
  )
}

export default QuotesList
