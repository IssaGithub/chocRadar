import { Component, Input } from '@angular/core';
import { chocolate } from '../../interfaces/chocolate';


@Component({
  selector: 'choc-list-preview',
  standalone: true,
  imports: [],
  templateUrl: './list-preview.component.html',
  styleUrl: './list-preview.component.scss'
})
export class ListPreviewComponent{
@Input() chocolate:chocolate={} as chocolate;


}
