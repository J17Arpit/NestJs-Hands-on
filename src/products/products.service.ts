import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    private products: Product[] = [];

    insertProduct(title: string, description: string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, description, price);
        this.products.push(newProduct);
        return prodId;
    }

    getAllProducts() {
        return [...this.products];
    }

    getSingleProduct(pId: string) {
        const product = this.products?.find(prod => prod?.id === pId);
        if(!product) {
            throw new NotFoundException('Product not found');
        }
        return { ...product };
    }
};  