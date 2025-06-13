"use client";
import { useAuth } from "@/store/useAuth";
import Link from "next/link";
import { useEffect } from "react";

export default function RecipesLayout({ children, featured, tags, recent }) {
  const { isAuthenticated, logout, checkAuth } = useAuth();
  useEffect(() => {
    const Auth = async () => {
      await checkAuth();
    };

    Auth();
  }, []);
  console.log(isAuthenticated);
  return (
    <>
      {isAuthenticated ? (
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link href={"/login"}>Login</Link>
        </div>
      )}
      <div className="grid grid-cols-4 gap-4 p-4">
        <main className="col-span-1">{children}</main>
        <aside className="col-span-1">{featured}</aside>
        <aside className="col-span-1">{tags}</aside>
        <aside className="col-span-1">{recent}</aside>
      </div>
    </>
  );
}
