import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { defineCustomElements, applyPolyfills } from "@tdp/st-design-components/dist/loader";
import { TDPDirectivesModule } from "@tdp/ng-commons";
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    DropdownComponent,
    ColorPickerComponent,
    RadioButtonComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    TDPDirectivesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
applyPolyfills().then(() => { defineCustomElements(window); });