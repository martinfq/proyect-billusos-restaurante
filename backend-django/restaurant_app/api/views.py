from ..models import Restaurant,Menu
from rest_framework import viewsets, permissions
from .serializers import RestaurantSerializer,MenuSerializer
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Q
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


@method_decorator(csrf_exempt, name='dispatch')
class FiltrarPorNombreView(APIView):
    def get(self, request, *args, **kwargs):
        nombre_a_filtrar = self.kwargs.get('name', '')
        print(nombre_a_filtrar)
        resultados = Restaurant.objects.filter(Q(name__icontains=nombre_a_filtrar))
        print(resultados)
        serializer = RestaurantSerializer(resultados, many=True)

        return Response({'rest': serializer.data})

@api_view(['GET'])
def menu_list(request, restaurant_id):
    # Filtrar los menús por el restaurant_id proporcionado en la URL
    menus = Menu.objects.filter(restaurant_id=restaurant_id)

    # Convertir los resultados a una lista de diccionarios
    serializer = MenuSerializer(menus, many=True)

    # Devolver la lista serializada en formato JSON
    return Response({'menus': serializer.data})

# @api_view(['GET'])
# def rest_list(request, name):
#     # Filtrar los menús por el restaurant_id proporcionado en la URL
#     restaurants = Restaurant.objects.filter(name = name)

#     # Convertir los resultados a una lista de diccionarios
#     serializer = RestaurantSerializer(restaurants, many=True)

#     # Devolver la lista serializada en formato JSON
#     return Response({'rest': serializer.data})