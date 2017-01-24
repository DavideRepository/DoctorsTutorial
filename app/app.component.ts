import { Component } from '@angular/core';

export class Doctor {
  id: number;
  name: string;
  age: string;
  clientsNum: string;
  available: boolean;
}

const DOCTORS: Doctor[] = [
  { id: 1, name: 'Marrey Peter'   , age:'57', clientsNum: '986', available: true },
  { id: 2, name: 'Saligam Json'   , age:'37', clientsNum: '956', available: true },
  { id: 3, name: 'Smith Richard'  , age:'45', clientsNum: '458', available: true },
  { id: 4, name: 'Mason James'    , age:'29', clientsNum: '845', available: true },
  { id: 5, name: 'Magneta Jules'  , age:'61', clientsNum: '1144', available: false },
  { id: 6, name: 'Rubber Fridman' , age:'55', clientsNum: '954', available: true },
  { id: 7, name: 'Dynama Peters'  , age:'48', clientsNum: '887', available: true },
  { id: 8, name: 'Iceta carlas'   , age:'49', clientsNum: '1024', available: false },
  { id: 9, name: 'Malimum Luis'   , age:'37', clientsNum: '765', available: true },
  { id: 10, name: 'Ferdinand Rudy', age:'55', clientsNum: '458', available: true }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Doctors</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Number of Clients</th>
        <th>Available</th>
      </tr>
      <tr *ngFor="let doctor of doctors"
          [class.selected]="doctor === selectedDoctor"
          (click)="onSelect(doctor)">
        <td><a (click)="onSelect(doctor)">{{doctor.name}}</a></td>
        <td>{{doctor.age}}</td>
        <td [class.selected-test]="doctor === selectedDoctor">{{doctor.clientsNum}}</td>
        <td>{{doctor.available}}</td>
      </tr>
    </table>
    <div *ngIf="selectedDoctor">
      <h2>Doctor details:</h2>
      <div><label>Id: </label>{{selectedDoctor.id}}</div>
      <div><label>Name: </label>{{selectedDoctor.name}}</div>
      <div><label>Age: </label>{{selectedDoctor.age}}</div>
      <div><label>Number of Clients: </label>{{selectedDoctor.clientsNum}}</div>
      <div><label>name: </label>{{selectedDoctor.available}}</div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .doctors {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }

li.doctors  ->  <li class"doctors"></li>

li .doctors   ->  <li>
                    <span class"doctors"></span>
                  </li>

.doctors li.selected:hover
               -> <div class"doctors">
                    <li class"selected"></li>
                  </div>


    .doctors li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    tr td.selected-test {
      background-color: green !important;
      color: white;
    }
    tr td.selected-test:hover {
      background-color: red !important;
      color: white;
    }
    .doctors li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .doctors .text {
      position: relative;
      top: -3px;
    }
    .doctors .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Doctors List';
  doctors = DOCTORS;
  selectedDoctor: Doctor;

  onSelect(doctor: Doctor): void {
    this.selectedDoctor = doctor;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/