import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdCheckboxModule, MdRippleModule, MdSliderModule, MdChipsModule, MdPaginatorModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdRippleModule, MdSliderModule, MdChipsModule, MdPaginatorModule],
  exports: [MdButtonModule, MdCheckboxModule, MdRippleModule, MdSliderModule, MdChipsModule, MdPaginatorModule],
})
export class MaterialModule { }