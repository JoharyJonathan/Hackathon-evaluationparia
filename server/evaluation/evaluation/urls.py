from django.urls import path, include
from django.contrib import admin
from .views import propose_exam, evaluate_responses, get_results, performance_report, student_feedback

urlpatterns = [
    path('admin/', admin.site.urls),
    path('authe/', include('authe.urls')),
    path('api/exams/propose/', propose_exam, name='propose_exam'),
    path('api/exams/<int:exam_id>/evaluate/', evaluate_responses, name='evaluate_responses'),
    path('api/exams/<int:exam_id>/results/', get_results, name='get_results'),
    path('api/exams/<int:exam_id>/reports/', performance_report, name='performance_report'),
    path('api/exams/<int:exam_id>/feedback/', student_feedback, name='student_feedback'),
]
