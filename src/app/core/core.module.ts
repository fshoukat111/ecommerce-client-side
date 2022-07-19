import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CategorySectionEffects, categorySectionReducer } from '@apps/shared/store';
import { ProductSectionEffects } from '@apps/modules/products/store/effects';
import { productSectionReducer } from '@apps/modules/products/store/reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({
      category: categorySectionReducer,
      product:productSectionReducer
    },
    {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictActionTypeUniqueness: true,
      },
    }
    ),
    EffectsModule.forRoot([
      CategorySectionEffects,
      ProductSectionEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
    }),
  ],
  exports: [
    HttpClientModule  ]
})
export class CoreModule { }
