"use client";
import { useState } from "react";
import Button from "@/app/components/ui/Button";

export default function EvaluateExam() {
  const [evaluationMode, setEvaluationMode] = useState(""); // "" | "manual" | "ai"

  // Si aucun mode n'est sélectionné, affichez le choix
  if (!evaluationMode) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">
          Choisissez votre mode d'évaluation
        </h1>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => setEvaluationMode("manual")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full"
          >
            Évaluation manuelle
          </Button>
          <Button
            onClick={() => setEvaluationMode("ai")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
          >
            Évaluation par IA
          </Button>
        </div>
      </div>
    );
  }

  // Interface pour l'évaluation manuelle
  if (evaluationMode === "manual") {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Évaluation Manuelle</h1>
        <p className="mb-4">
          Dans cette section, vous pouvez consulter les copies des étudiants et
          corriger manuellement chaque réponse.
        </p>
        {/* Ici, vous pourrez intégrer le formulaire ou les outils de correction manuelle */}
        <Button
          onClick={() => setEvaluationMode("")}
          className="mt-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          Retour
        </Button>
      </div>
    );
  }

  // Interface pour l'évaluation par IA
  if (evaluationMode === "ai") {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Évaluation par IA</h1>
        <p className="mb-4">
          L&apos;IA analysera automatiquement les réponses et vous fournira une
          correction ainsi qu&apos;un feedback personnalisé pour chaque
          étudiant.
        </p>
        {/* Ici, vous pourrez intégrer l'interface d'appel à l'IA pour la correction */}
        <Button
          onClick={() => setEvaluationMode("")}
          className="mt-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          Retour
        </Button>
      </div>
    );
  }

  return null;
}
