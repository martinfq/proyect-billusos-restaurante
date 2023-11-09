from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.


class Restaurant(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    restaurant_type = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    logo_url = models.URLField( blank=True, null=True)
    city = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    num_menus = models.IntegerField(default=0)


class Menu(models.Model):
    name = models.CharField(max_length=200, blank=False, null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    description = models.TextField()
    is_spicy = models.BooleanField()
    have_food_allergies = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    restaurant_id = models.OneToOneField(Restaurant, on_delete=models.CASCADE)


# class RestaurantMenu(models.Model):
#     restaurant_id = models.ForeignKey(
#         Restaurant, on_delete=models.CASCADE)
#     menu_id = models.ForeignKey(
#         Menu, on_delete=models.CASCADE)

@receiver(post_save, sender=Menu)
def increase_num_menus(sender, instance, created, **kwargs):
    if created:
        # Aumentar el valor de num_menus en el restaurante correspondiente
        instance.restaurant_id.num_menus += 1
        instance.restaurant_id.save()
# Registra la señal
post_save.connect(increase_num_menus, sender=Menu)



# class FoodType(models.Model):
#     name = models.CharField(max_length=100, blank=False, null=False)


# class RestaurantType(models.Model):
#     restaurant_id = models.OneToOneField(
#         Restaurant, on_delete=models.CASCADE, primary_key=True)
#     food_type_id = models.OneToOneField(
#         FoodType, on_delete=models.CASCADE, primary_key=True)
