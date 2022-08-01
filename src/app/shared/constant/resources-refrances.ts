import { environment } from "src/environments/environment";

export class ApiUrl {
    static baseUrl = `${environment.baseUrl}`;
    static category = 'category';
    static products = 'product';
    static addToCart = 'add-to-cart';
    static removeSingleItemCart = 'remove-single-item-cart';
    static deleteProductFromCart = 'delete-from-cart';
}