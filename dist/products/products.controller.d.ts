import { ProductService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductService);
    addProduct(prodTitle: string, prodDescription: string, prodPrice: number): any;
    getAllProducts(): import("./product.model").Product[];
    getSingleProduct(prodId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
}
