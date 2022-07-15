import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from '@apps/core/services/request.service';
import { ApiUrl } from '@apps/shared/constant/resources-refrances';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private requestService: RequestService) { }

  getProductsList(categorySlug: string, page: number): Observable<any[]> {
    return this.requestService.get(`${ApiUrl.baseUrl}/${ApiUrl.products}/${categorySlug}/${page}`)
  }
}
