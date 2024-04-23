import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  usuarios = [
    {
      id: '1',
      usr: 'Usuario 1',
      edad: 20,
    },
    {
      id: '2',
      usr: 'Usuario 2',
      edad: 21,
    },
    {
      id: '3',
      usr: 'Usuario 3',
      edad: 22,
    },
    {
      id: '4',
      usr: 'Usuario 4',
      edad: 23,
    },
    {
      id: '5',
      usr: 'Usuario 5',
      edad: 24,
    },
  ];
  constructor() {}
  ngOnInit() {}
}
