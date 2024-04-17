import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  dataSource = list;
  displayedColumns: string[] = ['name', 'drivers']
}

export interface MYPARTS {
  name: string;
  driver1: string;
  driver2: string;
  imgsrc: string;
}

const list: MYPARTS[] = [
  {name: 'Red Bull Racing',  driver1: "Max Verstappen ",            driver2: "Sergio Perez",          imgsrc: "assets/teams/RedBull.avif"},
  {name: 'Ferrari',          driver1: "Charles Leclerc",            driver2: "Carlos Sainz ",         imgsrc: "assets/teams/Ferrari.avif"},
  {name: 'McLaren',          driver1: "Lando Norris   ",            driver2: "Oscar Piastri",         imgsrc: "assets/teams/McLaren.avif"},
  {name: 'Mercedes',         driver1: "George Russell ",            driver2: "Lewis Hamilton",        imgsrc: "assets/teams/Mercedes.avif"},
  {name: 'Aston Martin',     driver1: "Fernando Alonso",            driver2: "Lance Stroll",          imgsrc: "assets/teams/AM.avif"},
  {name: 'Racing Bulls',     driver1: "Yuki Tsunoda   ",            driver2: "Daniel Ricciardo",      imgsrc: "assets/teams/RB.avif"},
  {name: 'Haas',             driver1: "Nico Hulkenberg",            driver2: "Kevin Magnussen",       imgsrc: "assets/teams/Haas.avif"},
  {name: 'Williams',         driver1: "Alexander Albon",            driver2: "Logan Sargeant",        imgsrc: "assets/teams/Williams.avif"},
  {name: 'Kick Sauber',      driver1: "Valtteri Bottas",            driver2: "Zhou Guanyu",           imgsrc: "assets/teams/Kick.avif"},
  {name: 'Alpine',           driver1: "Esteban Ocon   ",            driver2: "Pierre Gasly",          imgsrc: "assets/teams/Alpine.avif"}
];
