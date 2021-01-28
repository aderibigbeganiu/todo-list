from django.contrib import admin
from .models import Todo

class TodoAdmin(admin.ModelAdmin):
    list_display = ["title", "completed"]
    search_fields = ["title"]
    list_filter = ["completed"]

admin.site.register(Todo, TodoAdmin)