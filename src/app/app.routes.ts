import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'details', component: DetailsComponent },
];
