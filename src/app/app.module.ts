import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CvComponent } from "./cvTech/cv/cv.component";
import { ListeCvComponent } from "./cvTech/liste-cv/liste-cv.component";
import { ItemCvComponent } from "./cvTech/item-cv/item-cv.component";
import { DetaitCvComponent } from "./cvTech/detait-cv/detait-cv.component";

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetaitCvComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
