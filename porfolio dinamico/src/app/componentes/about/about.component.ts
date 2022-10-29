import { Component, OnInit } from "@angular/core";
import { usuario } from "src/app/model/usuario.model";
import { UsuarioService } from "src/app/service/usuario.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  usuario: usuario = new usuario("", "", "", "");

  constructor(public usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe((data) => {
      this.usuario = data;
    });
  }
}
