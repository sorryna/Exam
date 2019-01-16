import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgAddPage } from './dlg-add';

@NgModule({
  declarations: [
    DlgAddPage,
  ],
  imports: [
    IonicPageModule.forChild(DlgAddPage),
  ],
})
export class DlgAddPageModule {}
