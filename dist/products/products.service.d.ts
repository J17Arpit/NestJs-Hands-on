import { Product } from "./product.model";
export declare class ProductService {
    private products;
    insertProduct(title: string, description: string, price: number): string;
    getAllProducts(): Product[];
    getSingleProduct(pId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
}
