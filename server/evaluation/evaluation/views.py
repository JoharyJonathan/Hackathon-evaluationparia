from django.http import JsonResponse
from .gemini_api import propose_exam_subject, evaluate_student_responses, get_exam_results, generate_performance_report, get_student_feedback

def propose_exam(request):
    if request.method == 'POST':
        exam_type = request.POST.get('exam_type')
        subject = request.POST.get('subject')
        level = request.POST.get('level')
        field = request.POST.get('field')
        num_questions = request.POST.get('num_questions')
        
        try:
            result = propose_exam_subject(exam_type, subject, level, field, num_questions)
            return JsonResponse(result, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

def evaluate_responses(request, exam_id):
    if request.method == 'POST':
        student_responses = request.POST.get('responses')
        
        try:
            result = evaluate_student_responses(exam_id, student_responses)
            return JsonResponse(result, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

def get_results(request, exam_id):
    try:
        result = get_exam_results(exam_id)
        return JsonResponse(result, status=200)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

def performance_report(request, exam_id):
    try:
        result = generate_performance_report(exam_id)
        return JsonResponse(result, status=200)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

def student_feedback(request, exam_id):
    try:
        result = get_student_feedback(exam_id)
        return JsonResponse(result, status=200)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
