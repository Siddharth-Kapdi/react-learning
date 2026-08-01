import Header from './Header.jsx'

const Dashboard = () => {
  const handleSave = () => {
    alert('Saved Successfully')
  }

  const handleDelete = () => {
    alert('Deleted Successfully')
  }

  const handleExport = () => {
    alert('Exported Successfully')
  }

  return (
    <>
      <Header onSave={handleSave} onDelete={handleDelete} onExport={handleExport} />
    </>
  )
}

export default Dashboard
