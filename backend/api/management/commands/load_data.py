import json
import os
from django.core.management.base import BaseCommand
from api.models import Category, Subcategory, Product
from django.conf import settings
from django.db import IntegrityError

class Command(BaseCommand):
    help = 'Load product data from JSON file'

    def handle(self, *args, **options):
        json_file_path = os.path.join(settings.BASE_DIR, '..', 'electronics.json')

        if not os.path.exists(json_file_path):
            self.stdout.write(self.style.ERROR(f'File not found: {json_file_path}'))
            return

        with open(json_file_path, 'r') as file:
            data = json.load(file)

        for category_data in data['categories']:
            category, _ = Category.objects.get_or_create(name=category_data['name'])
            for subcategory_data in category_data['subcategories']:
                subcategory, _ = Subcategory.objects.get_or_create(
                    name=subcategory_data['name'],
                    category=category
                )
                for product_data in subcategory_data['products']:
                    try:
                        product, created = Product.objects.update_or_create(
                            id=product_data['id'],
                            defaults={
                                'name': product_data['name'],
                                'brand': product_data['brand'],
                                'price': product_data['price'],
                                'description': product_data['description'],
                                'specs': product_data['specs'],
                                'in_stock': product_data['inStock'],
                                'image_url': product_data['imageUrl'],
                                'subcategory': subcategory
                            }
                        )
                        if created:
                            self.stdout.write(self.style.SUCCESS(f"Created product: {product.name}"))
                        else:
                            self.stdout.write(self.style.SUCCESS(f"Updated product: {product.name}"))
                    except IntegrityError as e:
                        self.stdout.write(self.style.ERROR(f"Error processing product {product_data['id']}: {str(e)}"))

        self.stdout.write(self.style.SUCCESS('Finished processing product data'))