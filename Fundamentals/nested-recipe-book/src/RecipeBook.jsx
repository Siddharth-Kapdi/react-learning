import RecipeCard from './RecipeCard'

const recipe = {
  title: 'Creamy Vegetable Pasta',
  servings: 4,

  ingredients: [
    { name: 'Pasta', qty: 300, unit: 'g' },
    { name: 'Broccoli', qty: 150, unit: 'g' },
    { name: 'Bell pepper', qty: 1, unit: 'piece' },
    { name: 'Mushrooms', qty: 150, unit: 'g' },
    { name: 'Garlic', qty: 3, unit: 'cloves' },
    { name: 'Olive oil', qty: 2, unit: 'tbsp' },
    { name: 'Heavy cream', qty: 200, unit: 'ml' },
    { name: 'Parmesan cheese', qty: 50, unit: 'g' },
    { name: 'Salt', qty: 1, unit: 'tsp' },
    { name: 'Black pepper', qty: 0.5, unit: 'tsp' },
  ],

  steps: [
    { order: 1, text: 'Cook the pasta according to the package instructions.' },
    { order: 2, text: 'Chop the broccoli, bell pepper, and mushrooms.' },
    { order: 3, text: 'Heat olive oil and sauté the vegetables for 5-7 minutes.' },
    { order: 4, text: 'Add garlic and cook for another minute.' },
    { order: 5, text: 'Add cream, parmesan, salt, and pepper. Stir until creamy.' },
    { order: 6, text: 'Add the cooked pasta and mix well.' },
  ],
}

const RecipeBook = () => {
  return (
    <div className="recipe-book">
      <RecipeCard recipe={recipe} />
    </div>
  )
}

export default RecipeBook
