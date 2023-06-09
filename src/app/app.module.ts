import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Translate
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LenguajeSelectorComponent } from './components/lenguaje-selector/lenguaje-selector.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponentComponent } from './components/hero-component/hero-component.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, LenguajeSelectorComponent, PortfolioComponent, HeaderComponent, HeroComponentComponent, CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
