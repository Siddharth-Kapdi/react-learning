import { useReducer } from 'react'

const Counter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1

      case 'DECREMENT':
        return state - 1

      case 'RESET':
        return 0

      default:
        return state
    }
  }

  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className="max-w-lg w-full px-4 md:px-6 lg:px-8 py-4">
      <div className="bg-black text-white h-60 w-full rounded-lg shadow-2xl flex flex-col justify-center items-center gap-12">
        <div>
          <h1 className="text-6xl">{count}</h1>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button
            className="bg-blue-500 py-2 px-4 rounded-lg cursor-pointer"
            onClick={() => dispatch({ type: 'INCREMENT' })}
          >
            INCREMENT
          </button>
          <button
            className="bg-red-500 py-2 px-4 rounded-lg cursor-pointer"
            onClick={() => dispatch({ type: 'DECREMENT' })}
          >
            DECREMENT
          </button>
          <button
            className="bg-white text-black py-2 px-4 rounded-lg cursor-pointer"
            onClick={() => dispatch({ type: 'RESET' })}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
