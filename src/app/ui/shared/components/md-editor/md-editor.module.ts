import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdEditorComponent } from './md-editor.component';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MdEditorComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    FormsModule
  ],
  exports: [
    MdEditorComponent
  ]
})
export class MdEditorModule { }
