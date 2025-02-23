import { useState } from 'react';

const GenerateExam = () => {
    const [examType, setExamType] = useState('');
    const [subject, setSubject] = useState('');
    const [level, setLevel] = useState('');
    const [field, setField] = useState('');
    const [numQuestions, setNumQuestions] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [deadline, setDeadline] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setResult(null);

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
                deadline,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            setResult(data);
        } else {
            const errorData = await response.json();
            setError(errorData.error);
        }
    };

    return (
        <div>
            <h1>Générer un Sujet d'Examen</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Type d'examen" value={examType} onChange={(e) => setExamType(e.target.value)} required />
                <input type="text" placeholder="Sujet" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                <input type="text" placeholder="Niveau" value={level} onChange={(e) => setLevel(e.target.value)} required />
                <input type="text" placeholder="Domaine" value={field} onChange={(e) => setField(e.target.value)} required />
                <input type="number" placeholder="Nombre de questions" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} required />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <input type="text" placeholder="Durée" value={duration} onChange={(e) => setDuration(e.target.value)} required />
                <input type="date" placeholder="Date limite" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
                <button type="submit">Générer</button>
            </form>
            {result && <div>Résultat: {JSON.stringify(result)}</div>}
            {error && <div>Erreur: {error}</div>}
        </div>
    );
};

export default GenerateExam;
