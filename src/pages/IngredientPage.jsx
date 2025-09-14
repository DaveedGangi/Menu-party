import { useParams, Link } from "react-router-dom";
import dishes from "../data/dishes.json";

function IngredientPage() {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === parseInt(id));

  if (!dish) return <p>Dish not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{dish.name}</h1>
       <img src={dish.image} alt={dish.name} className="w-full h-32 object-cover rounded" />
      <p className="mb-4">{dish.description}</p>
      <h2 className="font-semibold">Ingredients:</h2>
      <ul className="list-disc ml-5">
        {dish.ingredients.map((ing, i) => (
          <li key={i}>
            {ing.name} - {ing.quantity}
          </li>
        ))}
      </ul>
      <Link to="/" className="block mt-4 text-blue-500">⬅ Back</Link>
    </div>
  );
}

export default IngredientPage;
