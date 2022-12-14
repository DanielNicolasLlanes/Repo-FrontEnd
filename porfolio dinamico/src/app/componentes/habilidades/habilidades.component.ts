import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  skill: Skills[] = [];

  constructor(private skillService: SkillsService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.loadSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  
  loadSkills(): void{
    this.skillService.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
          this.loadSkills()
        }, err =>{
          alert("Error al eliminar habilidad");
        }
      )
    }
  }

}
