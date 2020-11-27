//https://material.angular.io/
//ng g c component_name
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  /*imgUrl ="../assets/CG_logo.png";
  url = "https://www.capgemini.com";
  userName: string = "";
  nameError: string = "";*/
  
  ngOnInit(): void{
    //this.title = "Hello from Capgemini.";
  }

  /*onClick($event){
    console.log("Savebutton is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event){
    console.log("Change Event Occured!",$event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }*/
}
