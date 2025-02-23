export default function ExamCard({ title, description }) {
    return (
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  