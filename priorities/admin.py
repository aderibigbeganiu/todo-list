from django.contrib import admin
from .models import Priority

class PriorityAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    search_fields = ['name']

admin.site.register(Priority, PriorityAdmin)