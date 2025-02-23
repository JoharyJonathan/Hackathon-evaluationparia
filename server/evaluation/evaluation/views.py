from django.http import JsonResponse
from .services import generate_exam

def generate_exam_view(request):
    exam_type = request.GET.get("exam_type", "examen")
    subject = request.GET.get("subject", "Mathématiques")
    level = request.GET.get("level", "Lycée")
    field = request.GET.get("field", "Sciences")
    num_questions = request.GET.get("num_questions", "5")
    format_type = request.GET.get("format_type", "QCM")
    difficulty = request.GET.get("difficulty", "Moyen")
    objective = request.GET.get("objective", "Évaluer la compréhension des concepts")

    exam = generate_exam(exam_type, subject, level, field, num_questions, format_type, difficulty, objective)
    
    
    return JsonResponse({"exam": exam})
