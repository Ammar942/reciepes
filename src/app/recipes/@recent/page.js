import { Suspense } from "react";

async function fetchRecent() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  return data.recipes.slice(-3);
}

export default async function RecentRecipes() {
  const recent = await fetchRecent();
  return (
    <Suspense fallback={<p>Loading recent...</p>}>
      <div>
        <h2>Recent Recipes</h2>
        {recent.map((r) => (
          <div key={r.id}>{r.name}</div>
        ))}
      </div>
    </Suspense>
  );
}
