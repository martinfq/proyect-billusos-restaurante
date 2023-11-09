from rest_framework import routers
from .views import MenuViewSet, RestaurantViewSet
from django.urls import path, include
from . import views
router = routers.DefaultRouter()
router.register(r'restaurants',RestaurantViewSet)
router.register(r'menus',MenuViewSet)

urlpatterns = [
    path('', include(router.urls)),
]