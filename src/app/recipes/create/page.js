"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateRecipe() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    servings: "",
    difficulty: "",
    cuisine: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      prepTimeMinutes: parseInt(form.prepTimeMinutes),
      cookTimeMinutes: parseInt(form.cookTimeMinutes),
      servings: parseInt(form.servings),
    };
    const res = await fetch("/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      router.push("/recipes");
    } else {
      console.log("ERRORRR");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-2">
      {Object.entries(form).map(([key, val]) => (
        <input
          key={key}
          placeholder={key}
          value={val}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
