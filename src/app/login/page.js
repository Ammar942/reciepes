"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    // Simulate authentication
    if (username === "admin" && password === "password") {
      document.cookie = `token=authenticated; path=/`; // simple auth cookie
      router.push("/recipes");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form onSubmit={login} className="space-y-2">
        <input
          className="w-full p-2 border"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 border"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white">
          Log In
        </button>
      </form>
    </div>
  );
}
