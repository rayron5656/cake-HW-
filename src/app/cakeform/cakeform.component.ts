import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-cakeform',
  templateUrl: './cakeform.component.html',
  styleUrls: ['./cakeform.component.css']
})
export class CakeformComponent implements OnInit {
  cake : any = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit(form:any){

    console.log(form.tags);
    
    this.cake = {...form,tags: form.tags.split(',')};
    
    // this.cake.tags = form.tags.split(',');
    
    
    
  }

}
