"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:8000/authe/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) { 
        const data = await response.json();
        setSuccess("Inscription réussie");
        setToken(data.token);
        console.log("Token:", data.token);
      } else {
        const data = await response.json();
        setError(data.message || "Une erreur s'est produite");
      }
    } catch (error) {
      setError("Une erreur s'est produite", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-4">Inscription</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      {token && <p className="text-blue-500 mb-4">Token: {token}</p>} {/* Afficher le token */}
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
      <p className="text-sm text-gray-600 mb-4">
        Vous avez de compte ? <Link href="/login" className="text-purple-600 hover:underline">Se connecter</Link>
      </p>
      <Link href="/dashboard/teacher">
        <button type="button" className="w-full bg-purple-600 text-white p-2 rounded">
          Register
        </button>
      </Link>
    </form>
  );
}