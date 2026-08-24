import useLocalStorage from './components/useLocalStorage'

const Notes = () => {
  const [note, setNote] = useLocalStorage('note', '')
  console.log('notes :', note)

  return (
    <div className="notes-container">
      <h1>Notes!</h1>
      <br />
      <textarea
        name="msg-box"
        className={`msg-box`}
        cols="30"
        rows="10"
        placeholder="Type your note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
    </div>
  )
}

export default Notes
