from rest_framework import routers
from .views import MenuViewSet, RestaurantMenuViewSet , RestaurantViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'restaurants',RestaurantViewSet)
router.register(r'menus',MenuViewSet)

urlpatterns = [
    path('', include(router.urls))
]