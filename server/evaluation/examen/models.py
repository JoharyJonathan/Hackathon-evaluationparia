from django.db import models
from django.contrib.auth.models import User

class Exam(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField()
    duration = models.IntegerField(help_text="Durée en minutes")
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="exams")

    def __str__(self):
        return self.title
