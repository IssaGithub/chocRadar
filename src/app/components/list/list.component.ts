import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chocolate } from '../../interfaces/chocolate';

@Component({
  selector: 'choc-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() data: chocolate[] = [];
}
