import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListPreviewComponent } from '../list-preview/list-preview.component';
import { CommonModule } from '@angular/common';
import { BaseItem } from '../../interfaces/BaseItem';

@Component({
  selector: 'choc-list',
  standalone: true,
  imports: [ListPreviewComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnChanges{

  @Input() data: BaseItem[] = [];

  constructor(){
    console.log("list data",this.data)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes",changes!)
  }


}
