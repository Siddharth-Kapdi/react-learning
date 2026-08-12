import { useState, useEffect } from 'react'
import Card from './Card'

const API = 'https://rickandmortyapi.com/api/character'

const CardList = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => {
      const fetchData = async (searchCharacter) => {
        try {
          setIsLoading(true)

          const res = await fetch(API + `?name=${searchCharacter}`, { signal: controller.signal })

          if (!res.ok) {
            setError('No characters found 😢')
            setIsLoading(false)
            setData([])
            return
          }

          const data = await res.json()
          setData(data.results)
          setIsLoading(false)
          setError(null)
        } catch (error) {
          if (error.name === 'AbortError') {
            console.log('Request was canceled')
          } else {
            console.log(error)
            setIsLoading(false)
            setError('Something went wrong. Try again.')
          }
        }
      }
      fetchData(search.toLowerCase())
    }, 500)

    return () => {
      clearTimeout(timeoutId)
      controller.abort()
    }
  }, [search])

  return (
    <>
      <div className="main-section">
        <div className="input-section">
          <h1>Rick & Morty</h1>
          <input
            type="text"
            placeholder="Search character..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {error ? (
          <div className="error-msg">{error}</div>
        ) : (
          <div className="card-list-section">
            {data.map((curElem) => {
              return <Card key={curElem.id} charData={curElem} />
            })}
          </div>
        )}
      </div>
      {isLoading && (
        <div className="loading">
          <p className="loader"></p>
        </div>
      )}
    </>
  )
}

export default CardList
