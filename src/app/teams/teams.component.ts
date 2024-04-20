import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  dataSource = list;
  displayedColumns: string[] = ['name', 'drivers'];
  teamColors: { [team: string]: string } = {
    'Oracle Red Bull Racing': 'darkblue',
    'Scuderia Ferrari': 'red',
    'McLaren': 'orange',
    'Mercedes-AMG Petronas': 'turquoise',  
    'Aston Martin Aramco': 'darkgreen',
    'Visa Cash App RB': 'blue',
    'Williams Racing': 'deepskyblue',
    'MoneyGram Haas': 'grey',
    'Stake F1 Team Kick Sauber': '#21fc0d',
    'BWT Alpine': 'pink',
  }
  getColorByTeam(team: string): string {
    return this.teamColors[team] || 'black'; 
  }
}

export interface MYPARTS {
  name: string;
  driver1: string;
  driver2: string;
  imgsrc: string;
}

const list: MYPARTS[] = [
  {name: 'Oracle Red Bull Racing',        driver1: "Max Verstappen ",            driver2: "Sergio Perez",          imgsrc: "assets/teams/RedBull.avif"},
  {name: 'Scuderia Ferrari',              driver1: "Charles Leclerc",            driver2: "Carlos Sainz ",         imgsrc: "assets/teams/Ferrari.avif"},
  {name: 'McLaren',                       driver1: "Lando Norris   ",            driver2: "Oscar Piastri",         imgsrc: "assets/teams/McLaren.avif"},
  {name: 'Mercedes-AMG Petronas',         driver1: "George Russell ",            driver2: "Lewis Hamilton",        imgsrc: "assets/teams/Mercedes.avif"},
  {name: 'Aston Martin Aramco',           driver1: "Fernando Alonso",            driver2: "Lance Stroll",          imgsrc: "assets/teams/AM.avif"},
  {name: 'Visa Cash App RB',              driver1: "Yuki Tsunoda   ",            driver2: "Daniel Ricciardo",      imgsrc: "assets/teams/RB.avif"},
  {name: 'MoneyGram Haas',                driver1: "Nico Hulkenberg",            driver2: "Kevin Magnussen",       imgsrc: "assets/teams/Haas.avif"},
  {name: 'Williams Racing',               driver1: "Alexander Albon",            driver2: "Logan Sargeant",        imgsrc: "assets/teams/Williams.avif"},
  {name: 'Stake F1 Team Kick Sauber',     driver1: "Valtteri Bottas",            driver2: "Zhou Guanyu",           imgsrc: "assets/teams/Kick.avif"},
  {name: 'BWT Alpine',                    driver1: "Esteban Ocon   ",            driver2: "Pierre Gasly",          imgsrc: "assets/teams/Alpine.avif"}
];
