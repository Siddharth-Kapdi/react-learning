import { useReducer } from 'react'

const initialState = {
  count: 0,
  increment_by: 1,
}

const Counter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: Math.min(state.count + Number(state.increment_by), 100),
        }

      case 'DECREMENT':
        return {
          ...state,
          count: Math.max(state.count - Number(state.increment_by), 0),
        }

      case 'RESET':
        return { count: 0, increment_by: 1 }

      case 'INCREMENT_BY':
        return {
          ...state,
          increment_by: action.payload,
        }

      case 'VALIDATE_INCREMENT_BY':
        return {
          ...state,
          increment_by:
            isNaN(Number(state.increment_by)) || Number(state.increment_by) < 1
              ? 1
              : Number(state.increment_by),
        }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="max-w-lg w-full px-4 md:px-6 lg:px-8 py-4">
      <div className="bg-black text-white h-60 w-full rounded-lg shadow-2xl p-6 flex flex-col justify-between items-center gap-6">
        <div>
          <h1 className="text-6xl">{state.count}</h1>
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter number"
            className="w-full text-black bg-white px-5 py-2 placeholder-gray-400 rounded-lg outline-0 focus:border-2 focus:border-blue-400"
            value={state.increment_by}
            onChange={(e) => dispatch({ type: 'INCREMENT_BY', payload: e.target.value })}
            onBlur={() => dispatch({ type: 'VALIDATE_INCREMENT_BY' })}
          />
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
