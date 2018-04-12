import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TabsModule} from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import {AppComponent} from './app.component';
import {GlobalService} from './global.service';
import {LoadingMaskDirective} from './loading-mask.directive';
import {LoginComponent} from './login/login.component';
import {LoginService} from "./login/login-service";
import {UserService} from "./login/user.service";
import {LogoutService} from './login/logout.service';
import {StartComponent} from './start/start.component';
import {HelpComponent} from './help/help.component';
import {HeaderComponent} from './main/header/header.component';
import {NavigationComponent} from './main/navigation/navigation.component';
import {FooterComponent} from './main/footer/footer.component';
import {MainframeComponent} from './main/mainframe/mainframe.component';
import {ClientComponent} from './client/client.component';
import {ClientListComponent} from './client/client-list/client-list.component';
import {ClientServiceService} from "./client/client-list/client-service.service";
import {ClientCreateComponent} from './client/client-create/client-create.component';
import {TableComponent} from './utils/components/table/table.component';
import {LoginGuard} from "./login/login.guard";
import {ExchangeService} from './exchange.service';



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'main', component: MainframeComponent, canActivateChild: [LoginGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'start'},
      {path: 'start', component: StartComponent},
      {path: 'clientCreate', component: ClientCreateComponent},
      {path: 'clientEdit', component: ClientCreateComponent},
      {path: 'clientList', component: ClientListComponent},
      {path: 'help', component: HelpComponent}
    ]
  },
  {path: 'main', redirectTo: '/start', pathMatch: 'full'},
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
    ClientListComponent,
    ClientCreateComponent,
    TableComponent,
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
    FormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    GlobalService,
    LoginService,
    LogoutService,
    ClientServiceService,
    UserService,
    LoginGuard,
    ExchangeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
