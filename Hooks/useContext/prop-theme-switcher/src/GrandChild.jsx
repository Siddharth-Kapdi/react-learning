import GrandGrandChild from './GrandGrandChild'

const GrandChild = ({ isLight, setIsLight }) => {
  return (
    <div>
      <GrandGrandChild isLight={isLight} setIsLight={setIsLight} />
    </div>
  )
}

export default GrandChild
