"use client";
import { useState } from "react";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription ici
    console.log("Register", username, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-4">Inscription</h1>
      <label className="block mb-2">Nom d'utilisateur</label>
      <input 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block mb-2">Email</label>
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block mb-2">Mot de passe</label>
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded">
        S'inscrire
      </button>
    </form>
  );
}
