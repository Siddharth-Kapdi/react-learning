import { useEffect, useState } from 'react'

const apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=10'

const FetchData = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="data-container">
      {isLoading ? <p>Loading...</p> : data.map((d) => <p key={d.id}>{d.title}</p>)}
    </div>
  )
}

export default FetchData
