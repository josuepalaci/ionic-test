import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-formularios",
  templateUrl: "./formularios.page.html",
  styleUrls: ["./formularios.page.scss"],
})

export class FormulariosPage implements OnInit {
  
  campos: {[key: string]: string};

  campo = "";

  constructor(private router: Router) {}

  ngOnInit() {}

  goHome() {
    this.router.navigate(["movies"]);
  }

  logForm(form) {
    if(this.campo != ''){
      this.campos = {...this.campos};
      this.campos[form.value["campo"]] = ''; 
      // console.log(this.campos);
      this.campo = '';
      console.log(JSON.stringify(this.campos));
    } else {
      console.log('vacio');
    }
  }

  eliminar(valor: string){

    delete this.campos[valor];
    console.log(this.campos);
    
  }

  
}
