from ..models import Restaurant,Menu, FoodType
from rest_framework import viewsets, permissions
from .serializers import RestaurantSerializer,MenuSerializer, FoodTypeSerializer
from rest_framework.response import Response
from django.db.models import Q
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView


class RestaurantViewSet(viewsets.ModelViewSet):
    #queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        name = self.request.query_params.get('name', None)
        restaurant_type = self.request.query_params.get('restaurant_type', None)

        queryset = Restaurant.objects.all()

        if name is not None:
            try:
                queryset = queryset.filter(Q(name__icontains=name))
            except :
                print("Error en filtrar por parametro name")
        elif restaurant_type is not None:
            try:
                queryset = queryset.filter(restaurant_type=restaurant_type)
            except :
                print("Error en filtrar por parametro restaurant_type")

        return queryset
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()

        # Resto de la lógica de la vista...

        # Serializar y devolver la respuesta utilizando Response
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class MenuViewSet(viewsets.ModelViewSet):
    #queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    def get_queryset(self):
        name = self.request.query_params.get('name', None)
        restaurant_id = self.request.query_params.get('restaurant_id', None)

        queryset = Menu.objects.all()

        if name is not None:
            try:
                queryset = queryset.filter(Q(name__icontains=name))
            except :
                print("Error en filtrar por parametro name")
        elif restaurant_id is not None:
            try:
                queryset = queryset.filter(restaurant_id=restaurant_id)
            except :
                print("Error en filtrar por parametro restaurant id")

        return queryset
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()

        # Resto de la lógica de la vista...

        # Serializar y devolver la respuesta utilizando Response
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

class FoodTypeViewSet(viewsets.ModelViewSet):
    queryset = FoodType.objects.all()
    serializer_class = FoodTypeSerializer

# @method_decorator(csrf_exempt, name='dispatch')
# class MiVista(APIView):
#     def get(self, request, *args, **kwargs):
#         # Obtener el valor del parámetro 'id' de la consulta
#         name = request.query_params.get('name', None)

#         if name is not None:
#             print(name)
#             resultados = Menu.objects.filter(Q(name__icontains=name))
#             print(resultados)
#             serializer = MenuSerializer(resultados, many=True)
#             return Response(serializer.data)
       

@method_decorator(csrf_exempt, name='dispatch')
class FiltrarPorNombreView(APIView):
    def get(self, request, *args, **kwargs):
        nombre_a_filtrar = self.kwargs.get('name', '')
        print(nombre_a_filtrar)
        resultados = Restaurant.objects.filter(Q(name__icontains=nombre_a_filtrar))
        print(resultados)
        serializer = RestaurantSerializer(resultados, many=True)

        return Response(serializer.data)

