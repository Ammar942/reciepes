export default function RecipesLayout({ children, featured, tags, recent }) {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <aside className="col-span-1">{featured}</aside>
      <aside className="col-span-1">{tags}</aside>
      <aside className="col-span-1">{recent}</aside>
      <main className="col-span-1">{children}</main>
    </div>
  );
}
