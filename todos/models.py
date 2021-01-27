from django.db import models
from django.conf import settings
from categories.models import Category
from priorities.models import Priority

class Todo(models.Model):
    user        = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name="todo_user", related_name="user", on_delete=models.CASCADE)
    title       = models.CharField(max_length=100, blank=True, null=True)
    priority_id = models.ForeignKey(Priority , verbose_name="todo_priority", related_name="priority", on_delete=models.CASCADE)
    category_id = models.ForeignKey(Category , verbose_name="todo_category", related_name="category", on_delete=models.CASCADE)
    complete    = models.BooleanField(default=False, blank=True, null=True)
    due_date    = models.DateTimeField(auto_now=False, auto_now_add=False)
    notes       = models.TextField()

    def __str__(self):
        return self.title