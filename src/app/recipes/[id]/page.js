import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];
}

export default async function RecipePage({ params }) {
  const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  if (!res.ok) return notFound();
  const recipe = await res.json();

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt="" />
      <p>{recipe.instructions}</p>
      <ul>
        {recipe.ingredients.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
