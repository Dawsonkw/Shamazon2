import json
from django.core.management.base import BaseCommand
from django.conf import settings
from api.models import Category, SubCategory, Product

class Command(BaseCommand):
    help = 'Load initial data into the database'
    
    def handle(self, *args, **kwargs):
        fixture_file = settings.BASE_DIR / 'api' / 'fixtures' / 'ecommerce.json'
        
        with open(fixture_file, 'r') as file:
            data = json.load(file)
            
        for category_data in data['categories']:
            category = Category.objects.create(name=category_data['name'])
            for subcategory_data in category_data['subcategories']:
                subcategory = subcategory.objects.create(name=subcategory_data['name'], category=category)
                for product_data in subcategory_data['products']:
                    Product.objects.create(
                        id=product_data['id'],
                        name=product_data['name'],
                        brand=product_data['brand'],
                        price=product_data['price'],
                        description=product_data['description'],
                        specs=product_data['specs'],
                        in_stock=product_data['inStock'],
                        image_url=product_data['imageUrl'],
                        subcategory=subcategory
                    )

        self.stdout.write(self.style.SUCCESS('Successfully loaded initial data'))