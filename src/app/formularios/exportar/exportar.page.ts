import { Component, OnInit } from '@angular/core';
import { ExportarService } from './exportar.service';

export interface Person {
  id: number;
  name: String;
  surname: String;
  age: number;
}


@Component({
  selector: "app-exportar",
  templateUrl: "./exportar.page.html",
  styleUrls: ["./exportar.page.scss"],
})
export class ExportarPage implements OnInit {
  PERSONS: Person[] = [
    { id: 1, name: "Thomas", surname: "Novicky", age: 21 },
    { id: 2, name: "Adam", surname: "Tracz", age: 12 },
    { id: 3, name: "Steve", surname: "Laski", age: 38 },
  ];

  constructor(private excelService: ExportarService) {}

  ngOnInit() {}

  logForm() {
    this.excelService.exportAsExcelFile(this.PERSONS, "persona");
  }
}
