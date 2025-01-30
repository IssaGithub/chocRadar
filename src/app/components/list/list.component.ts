import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { DecimalFormatPipe } from '../../pipes/decimal-format.pipe';
import { IsNumberPipe } from '../../pipes/is-number.pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,DecimalFormatPipe,IsNumberPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input() colums: string[] = [];
  @Input() data: any[] = [];

}
