import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartviewPageRoutingModule } from './cartview-routing.module';

import { CartviewPage } from './cartview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartviewPageRoutingModule
  ],
  declarations: [CartviewPage]
})
export class CartviewPageModule {}
