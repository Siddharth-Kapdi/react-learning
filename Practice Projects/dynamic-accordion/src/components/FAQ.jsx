const FAQ = ({ curData, openId, handleShowClose }) => {
  const { id, question, answer } = curData

  return (
    <div className="w-full bg-gray-700 p-4 rounded-lg space-y-6 border-l-2">
      <div className="flex justify-between">
        <h2 className="text-lg">{question}</h2>
        <button
          className={`${openId === id ? 'bg-rose-600' : 'bg-green-500'} text-lg py-1 px-4 rounded-lg cursor-pointer`}
          onClick={() => handleShowClose(id)}
        >
          {openId === id ? 'Close' : 'Show'}
        </button>
      </div>
      {openId === id ? <p>{answer}</p> : ''}
    </div>
  )
}

export default FAQ
