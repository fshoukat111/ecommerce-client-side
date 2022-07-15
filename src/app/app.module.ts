import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@apps/shared/shared.module';
import { CoreModule } from '@apps/core/core.module';
import { CategoryListComponent } from '@apps/shared/components';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
