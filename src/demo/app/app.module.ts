import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

import { IKeyboardLayouts, keyboardLayouts, MAT_KEYBOARD_LAYOUTS, MatKeyboardModule } from '@ngx-material-keyboard/core';

import { AppComponent } from './app.component';

const customLyouts: IKeyboardLayouts = {
  ...keyboardLayouts,
  'Custom Layout你的布局': {
    'name': 'Awesome layout',
    'keys': [
      [
        ['1', '!'],
        ['2', '@'],
        ['3', '#'],
        ['4', '$']
      ]
    ],
    'lang': ['Chinese中文']
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    // Material modules
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,

    MatKeyboardModule
  ],
  providers: [
    { provide: MAT_KEYBOARD_LAYOUTS, useValue: customLyouts }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
