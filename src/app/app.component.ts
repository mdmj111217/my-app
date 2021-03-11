import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface UserInfo {
  lastName: string;
  firstName: string;
  age: string;
  mobile: string;
  email: string;
  address: string;
}

const USER_DATA: UserInfo[] = [
  { firstName: 'Mark', lastName: 'Marasigan', age: '31', mobile: '(09)12-345-6789', email: 'm@gmail.com', address: 'Lansones St., Brgy. San Vicente, Sto. Tomas, Batangas, Philippines, 4234' },
  { firstName: 'Darwin', lastName: 'Domingo', age: '31', mobile: '(09)12-345-6789', email: 'd@gmail.com', address: 'Lansones St., Brgy. San Vicente, Sto. Tomas, Batangas, Philippines, 4234' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableColumns: string[] = ['firstName', 'lastName', 'age', 'mobile', 'email', 'address', 'delete'];
  dataSource = new MatTableDataSource<UserInfo>(USER_DATA);

  
  emailFormControl = new FormControl('', [
    Validators.email,
  ]);

  firstName = '';
  lastName = '';
  age = '';
  phoneNum = '';
  email = '';
  address = '';

  selectedIndex = -1;

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  selectRow(row: UserInfo, index: number) {
    if (index == this.selectedIndex) {
      this.clearData();
      this.selectedIndex = -1;
    } else {
      this.firstName = row.firstName;
      this.lastName = row.lastName;
      this.age = row.age;
      this.phoneNum = row.mobile;
      this.email = row.email;
      this.address = row.address;
      this.selectedIndex = index;
    }
  }

  onSave() {
    let user: UserInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      mobile: this.phoneNum,
      email: this.email,
      address: this.address
    };

    USER_DATA.push(user);
    this.dataSource.data = USER_DATA;
    this.clearData();
  }

  onUpdate() {
    let user: UserInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      mobile: this.phoneNum,
      email: this.email,
      address: this.address
    };

    USER_DATA[this.selectedIndex] = user;
    this.dataSource.data = USER_DATA;
    this.clearData();
  }

  onDelete(index: number) {
    USER_DATA.splice(index, 1);
    this.dataSource.data = USER_DATA;
  }

  clearData() {
    this.firstName = '';
    this.lastName = '';
    this.age = '';
    this.phoneNum = '';
    this.email = '';
    this.address = '';
  }
}
