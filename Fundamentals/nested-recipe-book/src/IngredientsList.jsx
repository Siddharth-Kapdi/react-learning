const IngredientsList = ({ ingredientsList }) => {
  return (
    <div className="ingredient-list">
      <details>
        <summary>
          <strong>Ingredients</strong>
        </summary>
        <ol>
          {ingredientsList.map(({ name, qty, unit }, idx) => {
            return (
              <li key={`${name + idx}`}>
                {name} - {qty} {unit}
              </li>
            )
          })}
        </ol>
      </details>
    </div>
  )
}

export default IngredientsList
