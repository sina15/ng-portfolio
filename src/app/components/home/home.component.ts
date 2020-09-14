
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HomeSearchService } from 'src/app/services/home-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit , OnChanges {

  searchInput = new FormControl("",[Validators.required,Validators.minLength(3)])
  resultSet
  constructor(private searchService: HomeSearchService) { }
 
  ngOnChanges(): void {
    // throw new Error('Method not implemented.');
    console.log(this.resultSet)
  }

  ngOnInit(): void {
    //the observable makes sure that you alwayus have updated data
    this.searchService.currentMessage.subscribe(data=>this.resultSet=data)
  }

  makeSearch(){

    this.searchService.homeSearch("/search",this.searchInput.value,{
      limit:20
    })
  }

  handleKeyUp(e){
    console.log(e)
  }
}
