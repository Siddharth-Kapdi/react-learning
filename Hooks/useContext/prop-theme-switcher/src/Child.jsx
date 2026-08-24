import GrandChild from './GrandChild'

const Child = ({ isLight, setIsLight }) => {
  return (
    <div>
      <GrandChild isLight={isLight} setIsLight={setIsLight} />
    </div>
  )
}

export default Child
