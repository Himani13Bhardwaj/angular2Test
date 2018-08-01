import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  row:any;
  constructor() { 
    this.row = {
      id: 0,
      username: '',
      phone: '',
      role: '',
      name: ''
    }
  }

  ngOnInit() {
  }

}
