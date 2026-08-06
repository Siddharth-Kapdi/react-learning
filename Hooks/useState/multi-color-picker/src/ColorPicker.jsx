import { useState } from 'react'

const swatches = [
  { id: 'red', hex: '#EF4444' },
  { id: 'orange', hex: '#F97316' },
  { id: 'yellow', hex: '#EAB308' },
  { id: 'green', hex: '#22C55E' },
  { id: 'blue', hex: '#3B82F6' },
  { id: 'purple', hex: '#A855F7' },
  { id: 'pink', hex: '#EC4899' },
  { id: 'black', hex: '#111827' },
]

const ColorPicker = () => {
  const [selectedColors, setSelectedColors] = useState([])

  // New version
  const handleColorSelector = (swatch) => {
    const isSelected = selectedColors.some((color) => color.id === swatch.id)
    if (!isSelected) {
      setSelectedColors((prev) => [...prev, swatch])
    } else {
      setSelectedColors((prev) => prev.filter((color) => color.id !== swatch.id))
    }
  }

  // Old version
  // const handleColorSelector = (e) => {
  //   const addNewColor = {
  //     id: e.target.textContent,
  //     hex: e.target.style.backgroundColor,
  //   }
  //   const isSelected = selectedColors.some((color) => color.id === addNewColor.id)
  //   if (!isSelected) {
  //     setSelectedColors((prev) => [...prev, addNewColor])
  //   } else {
  //     setSelectedColors((prev) => prev.filter((color) => color.id !== addNewColor.id))
  //   }
  // }

  return (
    <div className="color-container">
      <h1>Pick colors!!</h1>
      <div className="color-div">
        {swatches.map((swatch) => {
          return (
            <div
              className={`color-box ${selectedColors.some((color) => color.id === swatch.id) ? 'selected' : ''}`}
              key={swatch.id}
              style={{ backgroundColor: swatch.hex }}
              onClick={() => handleColorSelector(swatch)}
            >
              {swatch.id}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ColorPicker
