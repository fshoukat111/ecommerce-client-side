import { environment } from "src/environments/environment";

export class ApiUrl {
    static baseUrl = `${environment.baseUrl}`;
    static category = 'category';
    static products = 'product';
}