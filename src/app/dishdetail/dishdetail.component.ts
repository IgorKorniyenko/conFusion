import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
<<<<<<< HEAD

import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

=======

>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})


export class DishdetailComponent implements OnInit {
  @Input()
  dish: Dish;
<<<<<<< HEAD
  
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }
=======
  constructor() { }
>>>>>>> 86460deabaa0e60e5489a6e4c12c3a238de0ee75

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }

}
