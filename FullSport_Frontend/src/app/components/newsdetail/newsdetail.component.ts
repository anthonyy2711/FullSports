import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/model/news';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit{
  //@Input() item:News;

  constructor(){}

  ngOnInit(): void{}
}
