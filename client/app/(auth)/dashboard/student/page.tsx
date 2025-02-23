import Card from "@/app/components/ui/Card";

export default function StudentDashboard() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Dashboard Étudiant</h1>
        
        <Card>
          <h2 className="text-xl font-semibold">Faire un examen</h2>
          <p className="text-gray-600">
            Sélectionnez un examen parmi les examens disponibles ci-dessous.
          </p>
        </Card>
      </div>
    );
  }
  