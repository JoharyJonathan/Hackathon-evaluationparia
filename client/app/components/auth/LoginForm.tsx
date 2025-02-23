"use client";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique de connexion ici
    console.log("Login", username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded shadow-md w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
      <label className="block mb-2">Nom d&apos;utilisateur</label>
      <input 
        type="text"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block mb-2">Mot de passe</label>
      <input 
        type="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded">
        Se connecter
      </button>
    </form>
  );
}

