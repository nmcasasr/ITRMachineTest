import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service';
import { MatTableDataSource } from '@angular/material/table';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testITMFront';
  users = [];
  sales = [];
  vehicles = [];
  usersKeys = [];
  salesKeys = [];
  vehiclesKeys = [];
  displayedColumns = []
  dataSource = {};
constructor(private appService: AppService) { }

ngOnInit() {

  this.showUsers();
  this.showSales();
  this.showVehicles();
 }

showUsers() {
  this.dataSource = this.appService.getUsers().subscribe(data => {
  //console.log('users', data);
  this.users = new Array(data);
  this.displayedColumns = ["Date_Set","Lastname","Name","Phone"];
  //this.dataSource = new Array(data);
});
}
showSales() {
  this.appService.getSales().subscribe(data => {
    this.sales = new Array(data);
  });
}
showVehicles() {
this.appService.getVehicles().subscribe(data => {
  this.vehicles = new Array(data);
});

}
}
