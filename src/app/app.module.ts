import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgforofDemoComponent } from './components/ngforof-demo/ngforof-demo.component';
import { NgswitchDemoComponent } from './components/ngswitch-demo/ngswitch-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgforofDemoComponent,
    NgswitchDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
