import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit () {
    let arr = JSON.parse(localStorage.getItem('data'));
    if(arr === null){
      localStorage.setItem('data', JSON.stringify([
        {"id":1,"username":"mathilde","phone":8997868321,"role":"ceo","name":"Mathilde Saylors","edit":false,"information":""},
        {"id":2,"username":"alia_ginder","phone":8696986989,"role":"founder","name":"Alia Ginder","edit":false,"information":""}
      ]));
    }
  }
}
