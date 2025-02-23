"use client";

export default function CreateExamPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Créer un examen</h1>
      <form className="bg-white p-6 rounded shadow-md">
        <label className="block mb-2">Titre de l'examen</label>
        <input type="text" className="w-full p-2 border mb-4" placeholder="Titre" />

        <label className="block mb-2">Description</label>
        <textarea className="w-full p-2 border mb-4" placeholder="Description"></textarea>

        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
          Créer
        </button>
      </form>
    </div>
  );
}
