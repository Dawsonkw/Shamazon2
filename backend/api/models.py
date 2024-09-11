from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)
    
class Subcategory(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, related_name="subcategories", on_delete=models.CASCADE)
    
class Product(models.Model):
    id = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    specs = models.JSONField()
    in_stock = models.BooleanField(default=True)
    image_url = models.URLField()
    subcategory = models.ForeignKey(Subcategory, related_name="products", on_delete=models.CASCADE)
    