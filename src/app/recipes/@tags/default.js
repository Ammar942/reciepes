export const dynamic = "force-dynamic";
export default async function Tags() {
  const res = await fetch("https://dummyjson.com/recipes/tags");
  const tags = await res.json();
  return (
    <div>
      <h2>Tags</h2>
      <ul>
        {tags.slice(0, 6).map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
