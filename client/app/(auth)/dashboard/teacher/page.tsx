"use client";

import { useState } from "react";
import Card from "@/app/components/ui/Card";

export default function TeacherDashboard() {
    const [courses, setCourses] = useState([]);

    return (
      <div>
        <h1 className="text-3xl font-bold mb-5">Dashboard Professeur</h1>

        <Card className="cursor-pointer hover:bg-gray-100" onClick={() => window.location.href = "/exam/create"}>
          <h2 className="text-xl font-bold mb-2">Proposer un examen</h2>
          <p className="text-gray-600">Cliquez ici pour proposer un nouvel examen.</p>
        </Card>

      </div>
    );
  }

