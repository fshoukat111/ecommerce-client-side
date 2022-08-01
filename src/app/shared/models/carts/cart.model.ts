import { Products } from "@apps/shared/models/products/product.model";

export class Cart {
    item?:Products[];
    quantity?:number=1;
    ordered?:boolean;
    createdAt?:string;
    updatedAt?:string
}