import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
import {Dish } from '../shared/dish';
import {DishService } from '../services/dish.service';
import {Promotion} from '../shared/promotion';
import {PromotionService} from '../services/promotion.service';

=======
>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  dish: Dish;
  promotion: Promotion;
  
  constructor(private dishService : DishService,
    private promotionService: PromotionService) { }

  ngOnInit() {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
=======
  constructor() { }

  ngOnInit() {
>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75
  }

}
