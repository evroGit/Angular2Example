import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppComponent} from './app.component';
import {GlobalService} from './global.service';
import {LoginServiceService} from "./login/login-service";
import {LoadingMaskDirective} from './loading-mask.directive';
import {LoginComponent} from './login/login.component';
import {StartComponent} from './start/start.component';
import {HelpComponent} from './help/help.component';
import {ClientComponent} from './client/client.component';
import { HeaderComponent } from './main/header/header.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainframeComponent } from './main/mainframe/mainframe.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainframeComponent,
    children:[
      {path: 'help', component: HelpComponent},
      {path: 'start', component: StartComponent},
      {path: 'client', component: ClientComponent}
    ]
  },
  {path: '**', redirectTo: 'login'}
];
const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingMaskDirective,
    HelpComponent,
    ClientComponent,
    StartComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    MainframeComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  providers: [
    GlobalService,
    LoginServiceService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
