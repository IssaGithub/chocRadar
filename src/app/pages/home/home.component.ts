import { Component, effect, OnInit, signal, Signal } from '@angular/core';
import { ListComponent } from "../../components/list/list.component";
import { chocolate } from '../../interfaces/chocolate';
import { ChocolateService } from '../../services/chocolate.service';
import { transformProductData } from '../../utility/chocolate-helper';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit{
  
  data: chocolate[] =[];
  colums =['name','brand','cheapestPricePer100g','pricePer100g','link'];
  
  constructor(private dataService:ChocolateService){

  }
  ngOnInit(): void {
  this.data=  transformProductData(this.dataService.getchocolates());
  }
}
