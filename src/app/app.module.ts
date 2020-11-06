import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MoedaService } from './services/public/moeda.service';
import { MoedaComponent } from './components/public/moeda/moeda.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { ConversorComponent } from './components/public/conversor/conversor.component';

@NgModule({
    declarations: [
        AppComponent,
        MoedaComponent,
        FooterComponent,
        ConversorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [MoedaService],
    bootstrap: [AppComponent]
})
export class AppModule { }
