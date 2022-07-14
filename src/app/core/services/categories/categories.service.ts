import { ApiUrl } from './../../../shared/constant/resources-refrances';
import { Injectable } from '@angular/core';
import { RequestService } from '@apps/core/services/request.service';
import { Observable } from 'rxjs';
import { Categories } from '@apps/shared/models/categories/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private requestService:RequestService) { }


  getCategoriesList():Observable<Categories[]>{
    return this.requestService.get(`${ApiUrl.baseUrl}/${ApiUrl.category}`)
  }
}
