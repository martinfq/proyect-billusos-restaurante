# Generated by Django 4.2.7 on 2023-11-09 21:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant_app', '0003_menu_restaurant_id_alter_restaurant_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menu',
            name='restaurant_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='restaurant_app.restaurant'),
        ),
        migrations.DeleteModel(
            name='RestaurantMenu',
        ),
    ]