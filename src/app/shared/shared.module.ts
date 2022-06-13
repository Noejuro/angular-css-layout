import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemContainerComponent } from './item-container/item-container.component';



@NgModule({
  declarations: [
    ItemContainerComponent
  ],
  exports: [
    ItemContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
