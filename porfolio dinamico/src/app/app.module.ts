import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./componentes/header/header.component";
import { LogoArgComponent } from "./componentes/logo-arg/logo-arg.component";
import { RedesComponent } from "./componentes/redes/redes.component";
import { BannerComponent } from "./componentes/banner/banner.component";
import { AboutComponent } from "./componentes/about/about.component";
import { ExperienciaComponent } from "./componentes/experiencia/experiencia.component";
import { EducacionComponent } from "./componentes/educacion/educacion.component";
import { NgCircleProgressModule } from "ng-circle-progress";
import { HabilidadesComponent } from "./componentes/habilidades/habilidades.component";
import { ProyectosComponent } from "./componentes/proyectos/proyectos.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { HomeComponent } from "./componentes/home/home.component";
import { LoginComponent } from "./componentes/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { interceptorProvider } from "./service/interseptor-service";
import { NewExperienciaComponent } from "./componentes/experiencia/new-experiencia.component";
import { EditExperienciaComponent } from "./componentes/experiencia/edit-experiencia.component";
import { NewEducacionComponent } from "./componentes/educacion/new-educacion.component";
import { EditEducacionComponent } from "./componentes/educacion/edit-educacion.component";
import { EditSkillComponent } from './componentes/habilidades/edit-skill.component';
import { NewSkillComponent } from './componentes/habilidades/new-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgComponent,
    RedesComponent,
    BannerComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
