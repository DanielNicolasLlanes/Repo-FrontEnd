import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { usuario } from "../model/usuario.model";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  URL = environment.URL + "usuarios/";

  constructor(private http: HttpClient) {}

  public getUsuario(): Observable<usuario> {
    return this.http.get<usuario>(this.URL + "traer/perfil");
  }
}
