import "./globals.css";
import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 bg-gray-200 flex gap-4">
          <Link href="/recipes">Recipes</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
