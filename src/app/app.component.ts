import { Component,ViewChild ,OnInit} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'maidcc';
  users: any[]=[];
  loading: boolean = true;
  pageno: number=0;
  total:number=0;
  per:number=0;
  @ViewChild(MatPaginator) paginator:any= MatPaginator;


  myControl = new FormControl();
  options: any [] = [];
  filteredOptions?: Observable<any[]>;



  constructor(public http: HttpClient) {
 
  }

  ngOnInit() {
    this.getData(1);
    this.getoptions(1);
    this.getoptions(2);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  changePage(event:PageEvent){
  if(event.pageIndex==0){
    this.getData(1);
      }
  else if(event.pageIndex==1){
        this.getData(2);
        }
  
  return true;
      
 }
  getData(num:number=1){
    return this.http.get(`https://reqres.in/api/users?page=${num}`).subscribe((response: any) =>{
      this.loading = false;
      this.users = response.data;
      this.total=response.total;
      this.per=response.per_page;
    })
  }

  getoptions(num:number=1){
    return this.http.get(`https://reqres.in/api/users?page=${num}`).subscribe((response: any) =>{
      for (let i=0;i<6;i++){
        this.options.push(response.data[i].id);
      }
      
    })  }


  private _filter(value: any): any[] {
    const filterValue = value.toString();

    return this.options.filter(option => option.toString().includes(filterValue));
  }
}