from django.urls import path, include
from rest_framework import routers
from rest_framework.schemas import get_schema_view
from users.views import UserViewSet


# Routers provide an easy way of automatically determining the URL conf.


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)



# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('docs/', include('documentations.urls'), name='docs'),

]