import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DishService } from './services/dish.service';

import { AppComponent } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing/app-routing.module';

import { PromotionService } from './services/promotion.service';
import { LoginComponent } from './login/login.component';

import { MatDialogModule} from '@angular/material/dialog';

import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule  } from '@angular/material/slide-toggle';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
=======
import { AppRoutingModule } from './app-routing/app-routing.component';
>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
<<<<<<< HEAD
    LoginComponent
=======
    AppRoutingModule
>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule

  ],
<<<<<<< HEAD
  providers: [
    DishService, 
    PromotionService
  ],
  entryComponents:[
    LoginComponent
  ],

=======
  providers: [DishService],
>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75
  bootstrap: [AppComponent]
})
export class AppModule { }
