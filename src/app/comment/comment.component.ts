import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() employees: any;
  inputPostInformation: any;
  showList: Boolean;
  showPhoneList: Boolean;
  @Output() emitEmployee = new EventEmitter();

  constructor() { 
    this.showPhoneList = false;
    this.showList = false;
  }

  ngOnInit() {
  }

  textAreaKeyHandler(e) {
    if(e.keyCode === 64){
      this.showList = true;
    }
    if(e.keyCode === 35) {
      this.showPhoneList = true;
    }
  }

  saveInformation(str){
    let usernameStr, phoneStr, arr, obj, assignedUser, msg, updatedCollection;
    assignedUser = [];
    arr = str.split(' ');
    msg = str;
    updatedCollection = this.employees;
    for(let i=0; i<arr.length; i++){
      if(arr[i].startsWith('@')){
        usernameStr = arr[i].slice(1, arr[i].length);
        obj = this.search(usernameStr, 'username');
        msg = msg.replace(arr[i],'');
        assignedUser.push(obj[0]);
      }
      if(arr[i].startsWith('#')){
        phoneStr = parseInt(arr[i].slice(1, arr[i].length));
        obj = this.search(phoneStr, 'phone');
        msg = msg.replace(arr[i],'');
        assignedUser.push(obj[0]);
      }
    }
    for(let i=0; i<assignedUser.length; i++){
      let index;
      index = updatedCollection.indexOf(assignedUser[i]);
      if(index !== -1){
        if(updatedCollection[index]['information'] === undefined || updatedCollection[index]['information'] === NaN) {
          updatedCollection[index]['information'] =  msg;
        }else{
          updatedCollection[index]['information'] =   updatedCollection[index]['information'] + msg;
        }
      }
    }
    this.emitEmployee.emit(updatedCollection);
    this.updateTheStorage();
    this.getLocalStorage();
    this.inputPostInformation = '';
  }

  selectedEmp(emp) {
    if(this.showList) {
      this.inputPostInformation = this.inputPostInformation + emp.username + ' ';
      this.showList = false;
    }
    if(this.showPhoneList) {
      this.inputPostInformation = this.inputPostInformation + emp.phone + ' ';
      this.showPhoneList = false;
    }
  }

  updateTheStorage() {
    localStorage.setItem('data', JSON.stringify(this.employees));
  }

  getLocalStorage() {
    this.employees =  JSON.parse(localStorage.getItem('data'));
  }

  search(val, prop) {
    return this.employees.filter(function(i){return i[prop] === val});
  }
}
