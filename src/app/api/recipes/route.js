export async function GET() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  const res = await fetch("https://dummyjson.com/recipes/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return Response.json(data);
}
