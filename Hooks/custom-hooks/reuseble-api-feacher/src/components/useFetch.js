import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(url, { signal: controller.signal })
        const apiData = await res.json()
        setData(apiData)
        setLoading(false)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      }
    }
    fetchData()
    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}

export default useFetch
