from django.db import models
from django.conf import settings

class Exam(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField()
    duration = models.IntegerField(help_text="Durée en minutes")
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="exams")

    def __str__(self):
        return self.title

class Question(models.Model):
    QUESTION_TYPES = [
        ('QCM', 'QCM'),
        ('courte', 'Courte'),
        ('longue', 'Longue'),
        ('code', 'Code'),
    ]
    
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE, related_name="questions")
    question_text = models.TextField()
    meta_data = models.JSONField(blank=True, null=True)
    type = models.CharField(max_length=10, choices=QUESTION_TYPES, default='QCM')

    def __str__(self):
        return self.text
    
class Response(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="responses")
    student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="responses")
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student.name} - {self.exam.title}"
    
class Answer(models.Model):
    response = models.ForeignKey(Response, on_delete=models.CASCADE, related_name="answers")
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="answers")
    answer_text = models.TextField()  
    score = models.FloatField(blank=True, null=True)  

    def __str__(self):
        return f"Answer for {self.question.id}"
    
class Feedback(models.Model):
    response = models.OneToOneField(Response, on_delete=models.CASCADE, related_name="feedback")
    feedback_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Feedback for {self.response.exam.title}"