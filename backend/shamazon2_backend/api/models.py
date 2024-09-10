from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class SubCategory(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, related_name='subcategories', on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.category.name} - {self.name}"
    
class Product(models.Model):
    id = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=200)
    brand = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    specs = models.JSONField()
    in_stock = models.BooleanField(default=True)
    image_url = models.URLField()
    subcategory = models.ForeignKey(SubCategory, related_name='products', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
    
    