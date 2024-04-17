import { Component } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.scss'
})
export class DriversComponent {
  dataSource = list;
  displayedColumns: string[] = ['name', 'number', 'team'];
}

export interface MYPARTS {
  name: string;
  number: number;
  team: string;
  imgsrc: string;
}

const list: MYPARTS[] = [
  {name: 'Max Verstappen',   number: 1,  team: 'Red Bull Racing',   imgsrc: "assets/drivers/MV1.png"},
  {name: 'Sergio Perez',     number: 11, team: 'Red Bull Racing',   imgsrc: "assets/drivers/SP11.png"},
  {name: 'Charles Leclerc',  number: 16, team: 'Scuderia Ferrari ', imgsrc: "assets/drivers/CL16.png"},
  {name: 'Carlos Sainz',     number: 55, team: 'Scuderia Ferrari ', imgsrc: "assets/drivers/CS55.png"},
  {name: 'Lando Norris',     number: 4,  team: 'McLaren',           imgsrc: "assets/drivers/LN4.png"},
  {name: 'Oscar Piastri',    number: 81, team: 'McLaren',           imgsrc: "assets/drivers/OP81.png"},
  {name: 'George Russell',   number: 63, team: 'Mercedes',          imgsrc: "assets/drivers/GR63.png"},
  {name: 'Lewis Hamilton',   number: 44, team: 'Mercedes',          imgsrc: "assets/drivers/LH44.png"},
  {name: 'Fernando Alonso',  number: 14, team: 'Aston Martin',      imgsrc: "assets/drivers/FA14.png"},
  {name: 'Lance Stroll',     number: 18, team: 'Aston Martin',      imgsrc: "assets/drivers/LS18.png"},
  {name: 'Yuki Tsunoda',     number: 22, team: 'RB',                imgsrc: "assets/drivers/YT22.png"},
  {name: 'Daniel Ricciardo', number: 3,  team: 'RB',                imgsrc: "assets/drivers/DR3.png"},
  {name: 'Nico Hulkenberg',  number: 27, team: 'Haas ',             imgsrc: "assets/drivers/NH27.png"},
  {name: 'Kevin Magnussen',  number: 20, team: 'Haas ',             imgsrc: "assets/drivers/KM20.png"},
  {name: 'Alexander Albon',  number: 23, team: 'Williams',          imgsrc: "assets/drivers/AA23.png"},
  {name: 'Logan Sargeant',   number: 2,  team: 'Williams',          imgsrc: "assets/drivers/LS2.png"},
  {name: 'Valtteri Bottas',  number:77,  team: 'Kick Sauber',       imgsrc: "assets/drivers/VB77.png"},
  {name: 'Zhou Guanyu',      number: 24, team: 'Kick Sauber',       imgsrc: "assets/drivers/ZG24.png"},
  {name: 'Esteban Ocon',     number: 31, team: 'Alpine',            imgsrc: "assets/drivers/EO31.png"},
  {name: 'Pierre Gasly',     number: 10, team: 'Alpine',            imgsrc: "assets/drivers/PG10.png"},

];




