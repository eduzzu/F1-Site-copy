import { Component } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.scss'
})
export class DriversComponent {
  dataSource = list;
  displayedColumns: string[] = ['name', 'number', 'team'];
  teamColors: { [team: string]: string } = {
    'Red Bull Racing': 'darkblue',
    'Ferrari': 'red',
    'McLaren': 'orange',
    'Mercedes': 'turquoise',  
    'Aston Martin': 'darkgreen',
    'RB': 'blue',
    'Williams': 'deepskyblue',
    'Haas': 'grey',
    'Sauber': '#21fc0d',
    'Alpine': 'pink',
  }
  getColorByTeam(team: string): string {
    return this.teamColors[team] || 'black'; 
  }

  numberColors: {[number: string]: string} = {
    '1, 11, 16, 55': 'red',
    '63': '#21fc0d',
    '44': 'yellow',
    '14, 18': 'darkgreen',
    '22, 3': 'blue',
    '31, 10': 'pink'
  }

  getColorByNumber(number: number): string {    
    for(const numbers in this.numberColors) {
      const numArray = numbers.split(',').map(Number);
      if(numArray.includes(number)){
        return this.numberColors[numbers];
      }
    }
    return 'black';
  }
}

export interface MYPARTS {
  firstName: string;
  lastName: string;
  number: number;
  team: string;
  imgsrc: string;
}

const list: MYPARTS[] = [
  {firstName: 'Max',       lastName: 'VERSTAPPEN',   number: 1,  team: 'Red Bull Racing',   imgsrc: "assets/drivers/MV1.png"},
  {firstName: 'Sergio',    lastName: 'PEREZ',        number: 11, team: 'Red Bull Racing',   imgsrc: "assets/drivers/SP11.png"},
  {firstName: 'Charles',   lastName: 'LECLERC',      number: 16, team: 'Ferrari',           imgsrc: "assets/drivers/CL16.png"},
  {firstName: 'Carlos',    lastName: 'SAINZ',        number: 55, team: 'Ferrari',           imgsrc: "assets/drivers/CS55.png"},
  {firstName: 'Lando',     lastName: 'NORRIS',       number: 4,  team: 'McLaren',           imgsrc: "assets/drivers/LN4.png"},
  {firstName: 'Oscar',     lastName: 'PIASTRI',      number: 81, team: 'McLaren',           imgsrc: "assets/drivers/OP81.png"},
  {firstName: 'George',    lastName: 'RUSSELL',      number: 63, team: 'Mercedes',          imgsrc: "assets/drivers/GR63.png"},
  {firstName: 'Lewis',     lastName: 'HAMILTON',     number: 44, team: 'Mercedes',          imgsrc: "assets/drivers/LH44.png"},
  {firstName: 'Fernando',  lastName: 'ALONSO',       number: 14, team: 'Aston Martin',      imgsrc: "assets/drivers/FA14.png"},
  {firstName: 'Lance',     lastName: 'STROLL',       number: 18, team: 'Aston Martin',      imgsrc: "assets/drivers/LS18.png"},
  {firstName: 'Yuki',      lastName: 'TSUNODA',      number: 22, team: 'RB',                imgsrc: "assets/drivers/YT22.png"},
  {firstName: 'Daniel',    lastName: 'RICCIARDO',    number: 3,  team: 'RB',                imgsrc: "assets/drivers/DR3.png"},
  {firstName: 'Nico',      lastName: 'HULKENBERG',   number: 27, team: 'Haas',              imgsrc: "assets/drivers/NH27.png"},
  {firstName: 'Kevin',     lastName: 'MAGNUSSEN',    number: 20, team: 'Haas',              imgsrc: "assets/drivers/KM20.png"},
  {firstName: 'Alexander', lastName: 'ALBON',        number: 23, team: 'Williams',          imgsrc: "assets/drivers/AA23.png"},
  {firstName: 'Logan',     lastName: 'SARGEANT',     number: 2,  team: 'Williams',          imgsrc: "assets/drivers/LS2.png"},
  {firstName: 'Valtteri',  lastName: 'BOTTAS',       number: 77, team: 'Sauber',            imgsrc: "assets/drivers/VB77.png"},
  {firstName: 'Zhou',      lastName: 'GUANYU',       number: 24, team: 'Sauber',            imgsrc: "assets/drivers/ZG24.png"},
  {firstName: 'Esteban',   lastName: 'OCON',         number: 31, team: 'Alpine',            imgsrc: "assets/drivers/EO31.png"},
  {firstName: 'Pierre',    lastName: 'GASLY',        number: 10, team: 'Alpine',            imgsrc: "assets/drivers/PG10.png"},
];




