"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Timer from "@/app/components/exam/Timer";
import QuestionCard from "@/app/components/exam/QuestionCard";
import Button from "@/app/components/ui/Button";

export default function ExamPage() {
  const params = useParams();

  // Exemple de données statiques pour l'examen
  const examData = {
    id: params.id,
    title: "Examen de Mathématiques",
    description:
      "Testez vos compétences en mathématiques avec cet examen interactif.",
    questions: [
      {
        question: "Quelle est la valeur approximative de π (pi) ?",
        options: ["3.14", "2.71", "1.62", "3.00"],
      },
      {
        question: "Combien font 5 + 7 ?",
        options: ["10", "12", "11", "13"],
      },
      // Ajoutez d'autres questions si besoin
    ],
    duration: 120, // durée en secondes
  };

  // Stocke les réponses de l'utilisateur (clé: index de la question)
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionIndex, answer) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const handleSubmit = () => {
    // Logique de soumission (par exemple, appel à l'API backend pour correction)
    console.log("Réponses soumises:", answers);
    // Vous pouvez rediriger l'utilisateur vers une page de résultats ou afficher un feedback
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{examData.title}</h1>
      <p className="mb-6 text-gray-700">{examData.description}</p>

      {/* Timer pour l'examen */}
      <Timer initialSeconds={examData.duration} />

      {/* Liste des questions */}
      <div className="mt-6 space-y-4">
        {examData.questions.map((q, index) => (
          <QuestionCard
            key={index}
            question={q.question}
            options={q.options}
            onAnswer={(answer) => handleAnswer(index, answer)}
          />
        ))}
      </div>

      {/* Bouton de soumission */}
      <div className="mt-8 text-center">
        <Button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full"
        >
          Soumettre l'examen
        </Button>
      </div>
    </div>
  );
}
