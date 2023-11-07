from django.db import models
from django.contrib.auth.hashers import make_password
# Create your models here.
class Restaurant(models.Model):
    name= models.CharField(max_length=100)
    restaurant_type = models.CharField(max_length=200)
    email = models.EmailField()
    password = models.CharField(max_length=128)
    address= models.CharField(max_length=200)
    logo_url= models.URLField()
    city= models.CharField(max_length=100)
    description= models.TextField()
    num_menus= models.IntegerField()

    def set_password(self, raw_password):
        # Hashea la contraseña antes de guardarla en la base de datos
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        # Comprueba si la contraseña proporcionada coincide con la almacenada en la base de datos
        return check_password(raw_password, self.password)

class Menu(models.Model):
    name= models.CharField(max_length=200)
    description= models.TextField()
    is_spicy= models.BooleanField()
    have_food_allergies = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)

class RestaurantMenu(models.Model):
    restaurant_id = models.OneToOneField(Restaurant, on_delete=models.CASCADE, primary_key=True)
    menu_id = models.OneToOneField(Menu, on_delete=models.CASCADE, primary_key=True)

class RestaurantType(models.Model):
    name = models.CharField(max_length=150)