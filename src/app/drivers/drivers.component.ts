import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.scss'
})
export class DriversComponent {
  constructor(
    private router: Router) {

    }
    goToDriver(id: number){
      this.router.navigate(['driver/' + id]);
    }
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

export interface DRIVERS {
  id: number,
  firstName: string;
  lastName: string;
  number: number;
  team: string;
  imgsrc: string;
}

const list: DRIVERS[] = [
  {id: 0,  firstName: 'Max',       lastName: 'VERSTAPPEN',   number: 1,  team: 'Red Bull Racing',   imgsrc: "assets/drivers/MV1.png"},
  {id: 1,  firstName: 'Sergio',    lastName: 'PEREZ',        number: 11, team: 'Red Bull Racing',   imgsrc: "assets/drivers/SP11.png"},
  {id: 2,  firstName: 'Charles',   lastName: 'LECLERC',      number: 16, team: 'Ferrari',           imgsrc: "assets/drivers/CL16.png"},
  {id: 3,  firstName: 'Carlos',    lastName: 'SAINZ',        number: 55, team: 'Ferrari',           imgsrc: "assets/drivers/CS55.png"},
  {id: 4,  firstName: 'Lando',     lastName: 'NORRIS',       number: 4,  team: 'McLaren',           imgsrc: "assets/drivers/LN4.png"},
  {id: 5,  firstName: 'Oscar',     lastName: 'PIASTRI',      number: 81, team: 'McLaren',           imgsrc: "assets/drivers/OP81.png"},
  {id: 6,  firstName: 'George',    lastName: 'RUSSELL',      number: 63, team: 'Mercedes',          imgsrc: "assets/drivers/GR63.png"},
  {id: 7,  firstName: 'Lewis',     lastName: 'HAMILTON',     number: 44, team: 'Mercedes',          imgsrc: "assets/drivers/LH44.png"},
  {id: 8,  firstName: 'Fernando',  lastName: 'ALONSO',       number: 14, team: 'Aston Martin',      imgsrc: "assets/drivers/FA14.png"},
  {id: 9,  firstName: 'Lance',     lastName: 'STROLL',       number: 18, team: 'Aston Martin',      imgsrc: "assets/drivers/LS18.png"},
  {id: 10, firstName: 'Yuki',      lastName: 'TSUNODA',      number: 22, team: 'RB',                imgsrc: "assets/drivers/YT22.png"},
  {id: 11, firstName: 'Daniel',    lastName: 'RICCIARDO',    number: 3,  team: 'RB',                imgsrc: "assets/drivers/DR3.png"},
  {id: 12, firstName: 'Nico',      lastName: 'HULKENBERG',   number: 27, team: 'Haas',              imgsrc: "assets/drivers/NH27.png"},
  {id: 13, firstName: 'Kevin',     lastName: 'MAGNUSSEN',    number: 20, team: 'Haas',              imgsrc: "assets/drivers/KM20.png"},
  {id: 14, firstName: 'Alexander', lastName: 'ALBON',        number: 23, team: 'Williams',          imgsrc: "assets/drivers/AA23.png"},
  {id: 15, firstName: 'Logan',     lastName: 'SARGEANT',     number: 2,  team: 'Williams',          imgsrc: "assets/drivers/LS2.png"},
  {id: 16, firstName: 'Valtteri',  lastName: 'BOTTAS',       number: 77, team: 'Sauber',            imgsrc: "assets/drivers/VB77.png"},
  {id: 17, firstName: 'Zhou',      lastName: 'GUANYU',       number: 24, team: 'Sauber',            imgsrc: "assets/drivers/ZG24.png"},
  {id: 18, firstName: 'Esteban',   lastName: 'OCON',         number: 31, team: 'Alpine',            imgsrc: "assets/drivers/EO31.png"},
  {id: 19, firstName: 'Pierre',    lastName: 'GASLY',        number: 10, team: 'Alpine',            imgsrc: "assets/drivers/PG10.png"},
];




