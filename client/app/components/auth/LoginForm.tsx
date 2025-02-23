"use client";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:8000/authe/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Connexion réussie !");
        console.log("Token:", data.token);
      } else {
        const data = await response.json();
        setError(data.error || "Une erreur s'est produite.");
      }
    } catch (error) {
      setError("Une erreur s'est produite.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded shadow-md w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
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