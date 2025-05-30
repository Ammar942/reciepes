export const revalidate = 3600;
export default async function FeaturedRecipes() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  const topTwo = data.recipes.sort((a, b) => b.rating - a.rating).slice(0, 2);
  return (
    <div>
      <h2>Top Recipes</h2>
      {topTwo.map((r) => (
        <div key={r.id}>
          <h3>{r.name}</h3>
        </div>
      ))}
    </div>
  );
}
