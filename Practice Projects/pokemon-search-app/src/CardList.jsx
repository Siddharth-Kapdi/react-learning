import { useState, useEffect } from 'react'
import Card from './Card'

const API = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0'

const CardList = () => {
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const res = await fetch(API)
        const data = await res.json()

        const fetchWorkingData = data.results.map(async (curElem) => {
          const res = await fetch(curElem.url)
          const data = await res.json()
          return data
        })
        const cleanPokemonData = await Promise.all(fetchWorkingData)
        setPokemon(cleanPokemonData)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setError(error)
      }
    }
    fetchPokemonData()
  }, [])

  const filteredPokemon = pokemon.filter((curElem) =>
    curElem.name.toLowerCase().includes(search.toLowerCase())
  )

  if (isLoading) {
    return (
      <div className="loading">
        <p className="loader"></p>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <p className="error-msg">Error :{error.message}</p>
      </div>
    )
  }

  return (
    <div className="main-section">
      <div className="input-field">
        <input
          type="text"
          placeholder="Search pokemon here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="card-list">
        {filteredPokemon.map((curElem) => {
          return <Card key={curElem.id} pokemonData={curElem} />
        })}
      </div>
    </div>
  )
}

export default CardList
