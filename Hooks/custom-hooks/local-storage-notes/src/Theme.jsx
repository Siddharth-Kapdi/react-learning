const Theme = ({ theme, setTheme }) => {
  return (
    <div className="theme-container">
      <button
        className="theme-btn"
        onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      >
        {theme === 'dark' ? 'light' : 'dark'}
      </button>
    </div>
  )
}

export default Theme
