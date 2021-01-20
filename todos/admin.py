from django.contrib import admin
from .models import Todo

class TodoAdmin(admin.ModelAdmin):
    list_display = ["title", "complete"]
    search_fields = ["title"]
    list_filter = ["complete"]

admin.site.register(Todo, TodoAdmin)