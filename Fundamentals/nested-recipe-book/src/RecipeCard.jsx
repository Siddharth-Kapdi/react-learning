import IngredientsList from './IngredientsList'
import StepList from './StepList'

const RecipeCard = ({ recipe }) => {
  const { title, servings, ingredients, steps } = recipe
  return (
    <div className="recipe-card">
      <div>
        <h2 className="recipe-title">{title}</h2>
        <p className="recipe-serving">Servings: {servings}</p>
      </div>
      <IngredientsList ingredientsList={ingredients} />
      <StepList stepList={steps} />
    </div>
  )
}

export default RecipeCard
