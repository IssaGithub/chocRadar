import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/http/chocolate.service';

@Component({
  selector: 'choc-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(
    private router: Router,
    private dataService: ProductService,
  ) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  isSearchVisible(): boolean {
    return this.router.url === '/';
  }

  onSerach(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    this.dataService.search(query);
    this.dataService.fetchProducts();
  }
}
