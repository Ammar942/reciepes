export async function GET(_, { params }) {
  const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  if (!res.ok) return new Response("Not found", { status: 404 });
  const data = await res.json();
  return Response.json(data);
}
