from rest_framework import routers
from .views import MenuViewSet, RestaurantViewSet, FiltrarPorNombreView
from django.urls import path, include
from . import views
router = routers.DefaultRouter()
router.register(r'all-restaurants',RestaurantViewSet)
router.register(r'all-menus',MenuViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('menus/<int:restaurant_id>/', views.menu_list, name='menu_list'),
    path('restaurants/<str:name>/', FiltrarPorNombreView.as_view(), name='restaurants_view'),
]