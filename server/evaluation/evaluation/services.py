import google.generativeai as genai
from django.conf import settings

genai.configure(api_key=settings.GEMINI_API_KEY)

def generate_exam(exam_type, subject, level, field, num_questions, format_type, difficulty, objective):
    prompt = f"""
    Génère un {exam_type} en {subject} pour le niveau {level}.
    - Domaine : {field}
    - Nombre de questions : {num_questions}
    - Format : {format_type}
    - Difficulté : {difficulty}
    - Objectif : {objective}
    """

    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt)
    
    return response.text