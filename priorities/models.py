from django.db import models

class Priority(models.Model):

    name = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        verbose_name = "Priority"
        verbose_name_plural = "Prioritiess"

    def __str__(self):
        return self.name
