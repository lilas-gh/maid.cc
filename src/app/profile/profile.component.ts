import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,public http: HttpClient) { }
  firstname:any='';
  lastname:any='';
  photo:any='';
  email:any='';
  loading: boolean = true;


  id:any=0;


  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.getprofile(this.id);
  }

  getprofile(num:number){
    return this.http.get(`https://reqres.in/api/users/${num}`).subscribe((response: any) =>{
      this.firstname = response.data.first_name;
      this.lastname=response.data.last_name;
      this.email=response.data.email;
      this.photo=response.data.avatar;
      this.loading = false;

    })

  }

}
