import requests
from django.conf import settings

def propose_exam_subject(exam_type, subject, level, field, num_questions):
    url = "https://api.gemini.com/v1/exams/propose"  # Remplacez par l'URL correcte de l'API
    headers = {
        "Authorization": f"Bearer {settings.GEMINI_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "exam_type": exam_type,
        "subject": subject,
        "level": level,
        "field": field,
        "num_questions": num_questions
    }
    
    response = requests.post(url, json=payload, headers=headers)
    
    if response.status_code == 200:
        return response.json()  # Retourne le sujet d'examen proposé
    else:
        raise Exception(f"Error: {response.status_code} - {response.text}")

def evaluate_student_responses(exam_id, student_responses):
    url = "https://api.gemini.com/v1/exams/evaluate"  # Remplacez par l'URL correcte de l'API
    headers = {
        "Authorization": f"Bearer {settings.GEMINI_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "exam_id": exam_id,
        "responses": student_responses
    }
    
    response = requests.post(url, json=payload, headers=headers)
    
    if response.status_code == 200:
        return response.json()  # Retourne les résultats de l'évaluation
    else:
        raise Exception(f"Error: {response.status_code} - {response.text}")

def get_exam_results(exam_id):
    url = f"https://api.gemini.com/v1/exams/{exam_id}/results"  # Remplacez par l'URL correcte de l'API
    headers = {
        "Authorization": f"Bearer {settings.GEMINI_API_KEY}",
        "Content-Type": "application/json"
    }
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        return response.json()  # Retourne les résultats de l'examen
    else:
        raise Exception(f"Error: {response.status_code} - {response.text}")

def generate_performance_report(exam_id):
    url = f"https://api.gemini.com/v1/exams/{exam_id}/reports"  # Remplacez par l'URL correcte de l'API
    headers = {
        "Authorization": f"Bearer {settings.GEMINI_API_KEY}",
        "Content-Type": "application/json"
    }
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        return response.json()  # Retourne le rapport de performance
    else:
        raise Exception(f"Error: {response.status_code} - {response.text}")

def get_student_feedback(exam_id):
    url = f"https://api.gemini.com/v1/exams/{exam_id}/feedback"  # Remplacez par l'URL correcte de l'API
    headers = {
        "Authorization": f"Bearer {settings.GEMINI_API_KEY}",
        "Content-Type": "application/json"
    }
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        return response.json()  # Retourne les feedbacks personnalisés
    else:
        raise Exception(f"Error: {response.status_code} - {response.text}")
