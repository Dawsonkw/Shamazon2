from django.urls import path, include
from rest_framework import DefaultRouter
from .views import CategoryViewSet, SubcategoryViewSet, ProductViewSet
from django.contrib import admin

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'subcategories', SubcategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    # path('api/', include('shamazon2_backend.api.urls')),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls')),
]