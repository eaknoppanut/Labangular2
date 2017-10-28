import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/user-management.service';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  private userList: User[];
  private respone;
  private status:string;
  
  constructor(private userManagementService: UserManagementService) { }

  ngOnInit() {
    this.status = "superadmin";    
    this.getAllUser();
  }
  addUser(username,password,email){
    this.userManagementService.createNewUser(username,password,email,this.status).subscribe((response) => {
     this.respone = response;
     this.getAllUser();
     });
   }
   
  getAllUser() {
    this.userManagementService.getAllUser().subscribe((response) => {
      this.userList = response;
    })
  }
}
interface User {
  adm_id: string;
  username: string;
  email: string;
  password: string;
  status: string;
}

