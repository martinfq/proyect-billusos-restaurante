from ..models import Restaurant,Menu,RestaurantMenu
from rest_framework import viewsets, permissions
from .serializers import RestaurantSerializer,MenuSerializer, RestaurantMenuSerializer

class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class RestaurantMenuViewSet(viewsets.ModelViewSet):
    queryset = RestaurantMenu.objects.all()
    serializer_class = RestaurantMenuSerializer