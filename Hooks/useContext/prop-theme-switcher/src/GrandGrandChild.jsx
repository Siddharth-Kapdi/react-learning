const GrandGrandChild = ({ isLight, setIsLight }) => {
  return (
    <div>
      <button onClick={() => setIsLight((prev) => !prev)}>{isLight ? 'Dark' : 'Light'}</button>
    </div>
  )
}

export default GrandGrandChild
