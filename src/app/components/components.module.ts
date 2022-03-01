import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerWithIframeComponent } from "./container-with-iframe/container-with-iframe.component";
import { SafePipe } from '../pipes/safe.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContainerWithIframeComponent,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContainerWithIframeComponent,
    SafePipe
  ]
})
export class ComponentsModule { }
