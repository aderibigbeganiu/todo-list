from django.urls import path, include
from django.conf.urls import url
from django.views.generic import TemplateView
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularJSONAPIView, SpectacularRedocView

urlpatterns = [
    path(
        "",
        SpectacularSwaggerView.as_view(
            template_name="swagger-ui.html", url_name="schema"
        ),
        name="swagger-ui",
    ),
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path('swagger.yaml/', SpectacularAPIView.as_view(), name='schema-swagger-yaml'),
    path('swagger.json/', SpectacularJSONAPIView.as_view(), name='schema-swagger-json'),
    path('redoc/', SpectacularRedocView.as_view(url_name='schema-swagger-yaml'), name='schema-redoc'),
]
