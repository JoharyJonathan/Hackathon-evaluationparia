import google.generativeai as genai
from django.conf import settings

genai.configure(api_key=settings.GEMINI_API_KEY)

def generate_question(prompt):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt)
    return response.text
