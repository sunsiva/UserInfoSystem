import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //TODO: Use original WEB API as baseURL
  baseUrl: string = 'https://my-json-server.typicode.com/sunsiva/AnthologyMemberInfo/';
  constructor(private http: HttpClient) {}
   
  listUsers()
    {
        return this.http.get(this.baseUrl+'users');
    }

    viewUser(id:string)
    {
       return this.http.get(this.baseUrl + 'users/'+id);
    }
   
    addUser(userObj: any)
    {
      return this.http.post(this.baseUrl + 'users', userObj);
    }

    deleteUser(id: any){
      return this.http.delete(this.baseUrl + 'users/'+id);
    }
}
