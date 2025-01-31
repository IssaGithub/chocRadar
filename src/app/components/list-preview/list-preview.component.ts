import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { chocolate } from '../../interfaces/chocolate';

@Component({
  selector: 'list-preview',
  standalone: true,
  imports: [],
  templateUrl: './list-preview.component.html',
  styleUrl: './list-preview.component.scss'
})
export class ListPreviewComponent{
@Input() chocolate:chocolate={} as chocolate;


}
