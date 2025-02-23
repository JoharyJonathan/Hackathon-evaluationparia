from django.http import JsonResponse
from .services import generate_question

def generate_question_view(request):
    prompt = request.GET.get("prompt", "Génère une question de mathématiques niveau collège.")
    question = generate_question(prompt)
    return JsonResponse({"question": question})
