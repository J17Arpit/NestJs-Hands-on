"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
let ProductService = class ProductService {
    constructor() {
        this.products = [];
    }
    insertProduct(title, description, price) {
        const prodId = Math.random().toString();
        const newProduct = new product_model_1.Product(prodId, title, description, price);
        this.products.push(newProduct);
        return prodId;
    }
    getAllProducts() {
        return [...this.products];
    }
    getSingleProduct(pId) {
        var _a;
        const product = (_a = this.products) === null || _a === void 0 ? void 0 : _a.find(prod => (prod === null || prod === void 0 ? void 0 : prod.id) === pId);
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        return Object.assign({}, product);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
exports.ProductService = ProductService;
;
//# sourceMappingURL=products.service.js.map