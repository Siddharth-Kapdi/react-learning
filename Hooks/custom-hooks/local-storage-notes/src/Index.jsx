import useLocalStorage from './components/useLocalStorage'
import Notes from './Notes'
import Theme from './Theme'

const Index = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')
  return (
    <div className={`main-container ${theme !== 'dark' ? 'light' : ''}`}>
      <Notes />
      <Theme theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default Index
