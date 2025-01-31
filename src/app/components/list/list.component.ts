import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListPreviewComponent } from '../list-preview/list-preview.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'list',
  standalone: true,
  imports: [ListPreviewComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnChanges{
  @Input() colums: string[] = [];
  @Input() data: any[] = [];

  constructor(){
    console.log("list data",this.data)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes",changes!)
  }


}
