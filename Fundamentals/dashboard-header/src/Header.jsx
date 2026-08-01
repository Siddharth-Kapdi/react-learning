const Header = ({ onSave, onDelete, onExport }) => {
  return (
    <div className="btn-container">
      <button onClick={onSave}>Save</button>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onExport}>Export</button>
    </div>
  )
}

export default Header
