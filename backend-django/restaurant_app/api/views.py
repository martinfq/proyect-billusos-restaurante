from ..models import Restaurant,Menu
from rest_framework import viewsets, permissions
from .serializers import RestaurantSerializer,MenuSerializer


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

