import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Category } from 'src/models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  constructor(
    public requestService   : RequestService,
    private router          : Router   
    ) { }

  ngOnInit() {}
  goBack(){
    this.router.navigate([''])
  }
  toggleActive(category: Category){
    
    category.toggleActive();
  }
  apply(){
    this.requestService.acitveCategories.concat(this.requestService.categories.filter(el=> el.active))
  }

}
