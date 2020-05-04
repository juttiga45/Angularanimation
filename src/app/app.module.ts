import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppHeader } from "./header/header.component";
import { Footer } from "./footer/footer.component";
import { Menu } from "./menu/menu.component";
import { Sqrt } from "./sqrt/sqrt.pipe";
import { UserService } from "./userservice/userserice";
import { MathCalc } from "./mathcalc/mathcalc.component";
import { LayoutComponent } from "./layout/layout.component";
import { BasicExComponent } from "./basic-ex/basic-ex.component";
import { ServiceExComponent } from "./services-ex/service-ex.component";
import { PipeExComponent } from "./pipe-ex/pipe-ex.component";
import { UserFormComponent } from "./forms-ex/forms-ex.component";
import { ChangeTextDirective } from "./directive/change-text.directive";
import { HttpModule, Http } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const appRoutesConfig: Routes = [
  { path: "basic-ex", component: BasicExComponent },
  { path: "pipe-ex", component: PipeExComponent },
  { path: "service-ex", component: ServiceExComponent },
  { path: "forms-ex", component: UserFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AppHeader,
    Footer,
    Menu,
    BasicExComponent,
    PipeExComponent,
    ServiceExComponent,
    Sqrt,
    MathCalc,
    UserFormComponent,
    ChangeTextDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutesConfig),
    BrowserAnimationsModule
  ],
  providers: [UserService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
