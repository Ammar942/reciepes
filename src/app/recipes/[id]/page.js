import { notFound } from "next/navigation";
export const dynamicParams = true;
export async function generateStaticParams() {
  return [1, 2, 3, 4, 5].map((id) => ({ id: id.toString() }));
}
export default async function RecipePage({ params }) {
  const { id } = params;

  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (!res.ok) return notFound();

  const recipe = await res.json();

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.instructions}</p>
      <ul>
        {recipe.ingredients.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
