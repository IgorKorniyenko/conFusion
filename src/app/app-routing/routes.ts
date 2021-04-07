import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
<<<<<<< HEAD
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dishdetail/:id',     component: DishdetailComponent },
  { path: 'contactus',     component: ContactComponent }
]; 
=======
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75
