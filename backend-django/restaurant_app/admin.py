from django.contrib import admin
from .models import Menu,RestaurantMenu,Restaurant
# Register your models here.
admin.site.register(Menu)
admin.site.register(Restaurant)
admin.site.register(RestaurantMenu)


