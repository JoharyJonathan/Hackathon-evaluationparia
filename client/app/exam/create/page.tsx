"use client";
import { useState } from "react";
import Button from "@/app/components/ui/Button";

export default function CreateExamPage() {
  // Etat pour choisir le mode de création
  const [mode, setMode] = useState(""); // "" | "manual" | "ia"

  // États communs pour le formulaire "Générer par IA"
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(120);
  const [examType, setExamType] = useState("");
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [field, setField] = useState("");
  const [numQuestions, setNumQuestions] = useState(0);
  const [formatType, setFormatType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [objective, setObjective] = useState("");
  const [generatedQuestions, setGeneratedQuestions] = useState<{ question: string; options: string[] }[]>([]);
  const [loading, setLoading] = useState(false);

const handleGenerateQuestions = async () => {
    setLoading(true);
    
    const response = await fetch('/api/exams/propose/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            exam_type: examType,
            subject,
            level,
            field,
            num_questions: numQuestions,
            description,
            duration,
            deadline: "", // Ajout d'une valeur par défaut pour deadline
        }),
    });



    if (response.ok) {
        const data = await response.json();
        setGeneratedQuestions(data.questions); // Assuming the response contains questions
        setLoading(false);
    } else {
        const errorData = await response.json();
        console.error("Error generating questions:", errorData.error);
        setLoading(false);
    }
    
    console.log("Prompt envoyé à l'IA :", prompt);

    // Simulation d'appel API pour la génération de questions
    setTimeout(() => {
      const questions = [
        {
          question: `Exemple de question générée pour ${subject} ?`,
          options: ["Option A", "Option B", "Option C", "Option D"],
        },
        {
          question: `Une autre question pour évaluer ${objective} ?`,
          options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        },
      ];
      setGeneratedQuestions(questions);
      setLoading(false);
    }, 1500);
  };

  const handleCreateExam = () => {
    const examData = {
      title,
      description,
      duration,
      examType,
      subject,
      level,
      field,
      numQuestions,
      formatType,
      difficulty,
      objective,
      questions: generatedQuestions,
    };
    console.log("Examen créé :", examData);
    // Envoyez examData à votre backend via un appel API
  };

  // Si aucun mode n'a encore été choisi, afficher le choix
  if (!mode) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">
          Choisissez votre méthode de création d'examen
        </h1>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => setMode("manual")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full"
          >
            Créer manuellement
          </Button>
          <Button
            onClick={() => setMode("ia")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
          >
            Générer par IA
          </Button>
        </div>
      </div>
    );
  }

  // Si le mode "Créer manuellement" est sélectionné, afficher un formulaire simplifié (placeholder)
  if (mode === "manual") {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Créer un examen manuellement</h1>
        <p>Formulaire de création manuelle à implémenter.</p>
        <div className="text-center mt-4">
          <Button
            onClick={() => setMode("")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
          >
            Retour
          </Button>
        </div>
      </div>
    );
  }

  // Mode "Générer par IA" : affichage du formulaire détaillé
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Créer un examen généré par IA</h1>
      

      <form className="bg-white p-6 rounded shadow-md">
        {/* Titre de l'examen */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Titre de l'examen</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Entrez le titre de l'examen"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Décrivez brièvement l'examen"
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        {/* Durée */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Durée (en secondes)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Champs additionnels pour la génération par IA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 font-semibold">Type d'examen</label>
            <input
              type="text"
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
              placeholder="Ex: QCM, Test écrit"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Matière</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Ex: Mathématiques"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Niveau</label>
            <input
              type="text"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              placeholder="Ex: Lycée, Université"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Domaine</label>
            <input
              type="text"
              value={field}
              onChange={(e) => setField(e.target.value)}
              placeholder="Ex: Sciences, Littérature"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Nombre de questions</label>
            <input
              type="number"
              value={numQuestions}
              onChange={(e) => setNumQuestions(Number(e.target.value))}
              placeholder="Ex: 10"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Format</label>
            <input
              type="text"
              value={formatType}
              onChange={(e) => setFormatType(e.target.value)}
              placeholder="Ex: QCM, Réponses courtes"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Difficulté</label>
            <input
              type="text"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              placeholder="Ex: Facile, Moyen, Difficile"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Objectif</label>
            <input
              type="text"
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              placeholder="Ex: Évaluer la compréhension"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Bouton de génération de questions */}
        <div className="mb-4">
          <Button
            onClick={handleGenerateQuestions}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            {loading ? "Génération en cours..." : "Générer questions avec IA"}
          </Button>
        </div>

        {/* Aperçu des questions générées */}
        {generatedQuestions.length > 0 && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Questions générées :</h2>
            <ul className="list-disc pl-5">
              {generatedQuestions.map((q, index) => (
                <li key={index} className="mb-2">
                  <strong>{q.question}</strong>
                  <ul className="list-inside list-disc text-gray-600">
                    {q.options.map((option, idx) => (
                      <li key={idx}>{option}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}
