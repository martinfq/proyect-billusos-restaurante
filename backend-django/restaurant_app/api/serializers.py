from rest_framework import serializers
from ..models import Restaurant,Menu, FoodType

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'

class FoodTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodType
        fields = '__all__'

# class RestaurantMenuSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = RestaurantMenu
#         fields = '__all__'