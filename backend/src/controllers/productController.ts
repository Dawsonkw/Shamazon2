import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const productsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../../electronics.json"), "utf8")
);

export const getAllProducts = (req: Request, res: Response) => {
  const products = productsData.categories.flatMap((category: any) =>
    category.subcategories.flatMap((subcategory: any) =>
      subcategory.products.map((product: any) => ({
        ...product,
        category: category.name,
        subcategory: subcategory.name,
      }))
    )
  );
  res.json(products);
};

export const getProductById = (req: Request, res: Response) => {
  const id = req.params.id;
  const product = productsData.categories
    .flatMap((category: any) =>
      category.subcategories.flatMap((subcategory: any) => subcategory.products)
    )
    .find((p: any) => p.id === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

export const getProductsByCategory = (req: Request, res: Response) => {
  const categoryName = req.params.category;
  const category = productsData.categories.find(
    (cat: any) => cat.name.tolowerCase() === categoryName.toLowerCase()
  );

  if (category) {
    const products = category.subcategories.flatMap(
      (subcategory: any) => subcategory.products
    );
    res.json(products);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};
