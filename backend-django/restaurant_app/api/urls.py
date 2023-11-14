from rest_framework import routers
from .views import MenuViewSet, RestaurantViewSet, FiltrarPorNombreView, FoodTypeViewSet
from django.urls import path, include
from . import views
router = routers.DefaultRouter()
router.register(r'all-restaurants',RestaurantViewSet, basename='restaurants')
router.register(r'menus',MenuViewSet, basename='menus')
router.register(r'food-type',FoodTypeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('restaurants/<str:name>/', FiltrarPorNombreView.as_view(), name='restaurants_view'),
]
    # path('menuss/', MiVista.as_view(), name='mi_vista'),