from django.db import models
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
# Create your models here.

class FoodType(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    def __str__(self):
        return self.name


class Restaurant(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    restaurant_type = models.ForeignKey(FoodType, on_delete=models.CASCADE)
    address = models.CharField(max_length=200, blank=True, null=True)
    logo_url = models.URLField( blank=True, null=True, default="https://as2.ftcdn.net/v2/jpg/02/23/33/13/500_F_223331378_a41F98V1YVvvyD4kzn1gKvlxhr0l9X9Z.jpg")
    city = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    num_menus = models.IntegerField(default=0, editable=False)

    def __str__(self):
        return self.name


class Menu(models.Model):
    name = models.CharField(max_length=200, blank=False, null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    restaurant_id = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    img_url = models.URLField( blank=True, null=True, default="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Antu_insert-image.svg/1200px-Antu_insert-image.svg.png")
    description = models.TextField(blank=True, null=True)
    is_spicy = models.BooleanField(default=False)
    have_food_allergies = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


@receiver(post_save, sender=Menu)
def increase_num_menus(sender, instance, created, **kwargs):
    if created:
        # Aumentar el valor de num_menus en el restaurante correspondiente
        instance.restaurant_id.num_menus += 1
        instance.restaurant_id.save()


@receiver(post_delete, sender=Menu)
def decrease_num_menus_on_delete(sender, instance, **kwargs):
    # Disminuir el valor de num_menus en el restaurante correspondiente
    instance.restaurant_id.num_menus -= 1
    instance.restaurant_id.save()

post_save.connect(increase_num_menus, sender=Menu)
post_delete.connect(decrease_num_menus_on_delete, sender=Menu)





# class RestaurantType(models.Model):
#     restaurant_id = models.OneToOneField(
#         Restaurant, on_delete=models.CASCADE, primary_key=True)
#     food_type_id = models.OneToOneField(
#         FoodType, on_delete=models.CASCADE, primary_key=True)

# CharField(max_length=100, choices=TIPOS_DE_RESTAURANTES)

# TIPOS_DE_RESTAURANTES = [
#     ('italiano', 'Restaurante Italiano'),
#     ('mexicano', 'Restaurante Mexicano'),
#     ('asiatico', 'Restaurante Asiático'),
#     ('vegetariano', 'Restaurante Vegetariano'),
#     ('parrilla', 'Restaurante de Parrilla'),
#     ('mariscos', 'Restaurante de Mariscos'),
#     ('cafeteria', 'Cafetería'),
#     ('comida_rapida', 'Comida Rápida'),
#     ('buffet', 'Restaurante Buffet'),
#     ('bar', 'Bar y Parrilla'),
#     ]