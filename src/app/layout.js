// app/layout.js
export const metadata = {
  title: "Recipes App",
  description: "Explore and create recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 bg-gray-200 flex gap-4">
          <a href="/recipes">Recipes</a>
          <a href="/login">Login</a>
          <a href="/dashboard">Dashboard</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
