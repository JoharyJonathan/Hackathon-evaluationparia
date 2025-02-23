"use client";
import Card from "@/app/components/ui/Card";
import Link from "next/link";

const sampleExams = [
  {
    id: 1,
    title: "Examen de Mathématiques",
    description: "Testez vos compétences en calcul et en algèbre.",
    duration: "120 min",
  },
  {
    id: 2,
    title: "Examen de Physique",
    description: "Évaluez vos connaissances en mécanique et en optique.",
    duration: "90 min",
  },
  {
    id: 3,
    title: "Examen de Littérature",
    description: "Analysez des textes et poèmes célèbres.",
    duration: "60 min",
  },
];

export default function StudentDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Étudiant</h1>

      {/* Section d'introduction */}
      <Card className="p-4 mb-8">
        <h2 className="text-xl font-semibold mb-2">Faire un examen</h2>
        <p className="text-gray-600">
          Sélectionnez un examen parmi les examens disponibles ci-dessous pour tester vos compétences et progresser.
        </p>
      </Card>

      {/* Liste des examens disponibles */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Examens Disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleExams.map((exam) => (
            <Link key={exam.id} href={`/exam/${exam.id}`} className="block">
              <Card className="hover:shadow-xl transition-shadow p-4">
                <h3 className="text-xl font-semibold mb-2">{exam.title}</h3>
                <p className="text-gray-600 mb-4">{exam.description}</p>
                <p className="text-sm text-gray-500">Durée : {exam.duration}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
