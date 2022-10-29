import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//Importacion de los componentes creados por mi
import { HomeComponent } from "src/app/componentes/home/home.component";
import { LoginComponent } from "src/app/componentes/login/login.component";
import { EditEducacionComponent } from "./componentes/educacion/edit-educacion.component";
import { NewEducacionComponent } from "./componentes/educacion/new-educacion.component";
import { EditExperienciaComponent } from "./componentes/experiencia/edit-experiencia.component";
import { NewExperienciaComponent } from "./componentes/experiencia/new-experiencia.component";
import { EditSkillComponent } from "./componentes/habilidades/edit-skill.component";
import { NewSkillComponent } from "./componentes/habilidades/new-skill.component";
import { GuardGuard } from "./service/guard.guard";
//Creacion del array con las rutas de los componentes
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "nuevaexp", component: NewExperienciaComponent, canActivate:[GuardGuard]},
  { path: "editexp/:id", component: EditExperienciaComponent, canActivate:[GuardGuard] },
  { path: "nuevaedu", component: NewEducacionComponent, canActivate:[GuardGuard] },
  { path: "editedu/:id", component:  EditEducacionComponent, canActivate:[GuardGuard]},
  { path: "newskill", component: NewSkillComponent, canActivate:[GuardGuard]},
  { path: "editskill/:id", component: EditSkillComponent, canActivate: [GuardGuard] }
];

//Importacion y exportacion del RouterMoudule para que tome las rutas dadas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
