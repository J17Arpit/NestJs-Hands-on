import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { get } from "http";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductService) {}

    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDescription: string,
        @Body('price') prodPrice: number
    ): any {
        const generatedId = this.productsService.insertProduct(prodTitle, prodDescription, prodPrice);
        return {
            id: generatedId 
        };
    } 

    @Get()
    getAllProducts() {
        return this.productsService.getAllProducts();
    }

    @Get(':id')
    getSingleProduct(@Param('id') prodId: string ) {
        return this.productsService.getSingleProduct(prodId);
    }
};