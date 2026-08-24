import Child from './Child'

const Parent = ({ isLight, setIsLight }) => {
  return (
    <div>
      <Child isLight={isLight} setIsLight={setIsLight} />
    </div>
  )
}

export default Parent
