import { Component, OnInit } from "@angular/core";
import { Personne } from "src/app/model/personne";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"]
})
export class CvComponent implements OnInit {
  personnes: Personne[];

  constructor() { }

  ngOnInit(): void {
    this.personnes = [
      new Personne(
        id: 1,
        name: 'khemiri',
        firstname: 'achref',
        path: 'adzvefz',
        age: 28,
        cin: 09999999,
        job: 'devWeb'
      ),
    new Personne(
      id: 1,
      name: 'khemiri',
      firstname: 'amine',
      path: 'dvvfd',
      age: 32,
      cin: 08888888,
      job: 'devWeb'
  )
    ];
  }
}
