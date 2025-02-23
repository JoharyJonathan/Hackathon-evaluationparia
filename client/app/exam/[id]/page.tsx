"use client";
import { useParams } from 'next/navigation';

export default function ExamDetailPage() {
  const params = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Examen #{params.id}</h1>
      <p>Interface de passage ou de consultation de l'examen.</p>
    </div>
  );
}
