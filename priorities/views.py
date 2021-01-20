from rest_framework import viewsets
from .serializers import PrioritySerializer
from .models import Priority

class PriorityViewSet(viewsets.ModelViewSet):
    queryset = Priority.objects.all()
    serializer_class = PrioritySerializer
    lookup_field = 'id'
