import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    DashboardService
  ]
})
export class DashboardComponent implements OnInit {
  employees: any = [];
  row: any;
  withoutSave: Boolean;  
  selectedItemHover: Boolean;
  message = [];

  constructor(
    private dashboardService: DashboardService
  ) { 
    this.withoutSave = false;
    this.row = {
      id: 0,
      username: '',
      phone: '',
      role: '',
      name: '',
      edit: false,
      information: ''
    };
    this.selectedItemHover = true;
  }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('data'));
    this.employees = data;
  }

  addEmployeeInformation() {
    let row;
    row = {
      id: 0,
      username: '',
      phone: 0,
      role: '',
      name: '',
      edit: true,
      information: ''
    };
    if (!this.withoutSave) {
      this.withoutSave = true;
      let data = JSON.parse(localStorage.getItem('data'));
      data.push(row);
      this.employees = data;
    }else {
      alert('Save previous information');
    }
  }

  saveEmployeeInfo (i, u, p, r, n) {
    if(u === undefined || p === undefined || r === undefined || n === undefined || u.length === 0 || p.length === 0 || r.length ===0 || n.length === 0) {
      alert('Enter the information');
      return 0;
    }
    if(!this.validationOfRow(u, p, r, n)) {
      return 0;
    }
    this.withoutSave = false;
    this.employees.splice(this.employees.length - 1, 1);
    this.row = {
      id: i,
      username: u,
      phone: p,
      role: r,
      name: n,
      edit: false,
      information: ''
    };
    this.dashboardService.addNewEmployee('/admin', this.row).subscribe(
      res => {
        console.log('success');
        this.responseCall(this.row);
      },
      err => {
        console.log('error');
        this.responseCall(this.row);
      }
    );
  }

  responseCall(row) {
    this.employees.push(row);
    this.updateTheStorage();
    alert('Saved...');
    this.row = {
      id: 0,
      username: '',
      phone: 0,
      role: '',
      name: '',
      edit: false,
      information: ''
    };
    this.message = [];
    this.getLocalStorage();
  }

  validationOfRow(u, p, r, n) {
    let patern;
    patern =  /[\w-_]+/;
    if(!patern.test(u)) {
      this.message.push('Please Enter the username start with a character/word');
      return false;
    }else {
      if(this.searchPhoneForUnique(p) || p.toString().length >10) {
        this.message.push('Please Enter unique phone number');
        return false;
      }else {
          if(r.length === 0 || n.length === 0) {
            this.message.push('Please Enter the username start with a character/word');
            return false;
          }
          else{
            return true;
          }
      }
    }
  }

  deleteEmployeeInfo(item, id) {
    if (this.withoutSave) {
      alert('You did not save the editable data');
      return 0;
    }
    let selected;
    selected = this.employees.indexOf(item);
    this.employees.splice(selected, 1);
    this.updateTheStorage();
    alert('Successfully deleted');
    this.getLocalStorage();
  }

  editEmployeeInfo(item, index) {
    this.employees[this.employees.indexOf(item)].edit = true;
  }
  
  searchPhoneForUnique(p) {
    let duplicate;
    duplicate = this.employees.filter(function(emp){ return parseInt(emp.phone) === p;});
    if(duplicate.length === 0) {
      return false;
    }else {
      return true;
    }
  }

  updateTheStorage() {
    localStorage.setItem('data', JSON.stringify(this.employees));
  }

  getLocalStorage() {
    this.employees =  JSON.parse(localStorage.getItem('data'));
  }

  clearEmployeeInformation() {
    localStorage.removeItem('data');
    alert('Data is cleared');
    this.getLocalStorage();
  }

  emitEmployee(d) {
    this.emitEmployee = d;
  }
}
