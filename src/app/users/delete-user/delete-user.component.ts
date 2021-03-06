import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  userId: string ='';
  userDetails:any;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, 
    private _snakeBar: MatSnackBar,
    private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId=data['id'];

      this.userService.viewUser(this.userId).subscribe(data =>{
        this.userDetails = data;
      })
    });

      

    if(this.userId){
      this.userService.deleteUser(this.userId).subscribe(data =>{
        this._snakeBar.open("User deleted successfully");
        //this.router.navigate(['list']);
      },err => {
        this._snakeBar.open("Unable to delete the user");
      })
    }
  }

}
