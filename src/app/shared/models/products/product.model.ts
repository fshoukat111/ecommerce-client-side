import { Categories } from "../categories/categories.model";

export class Products {
    id?: string;
    name?: string;
    slug?: string;
    description?: string;
    category?:Categories[];
    amount?:number;
    stock?:number;
    isAvailable?:false;
    createdAt?:string;
    updatedAt?:string;
}