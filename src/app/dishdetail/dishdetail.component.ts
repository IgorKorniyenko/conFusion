import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';


const COMMENTS: Comment[] = [
  {
    comm: 'Imagine all the eatables living in conFusion!',
    puntuation: '5 Stars',
    author: 'John Lenon',
    date: 'Oct 17, 2012'
  },
  {
    comm: 'Sends anyone to heaven, I wish I could get my mother-in-law',
    puntuation: '4 Stars',
    author: 'Paul MacVites',
    date: 'Sep 6, 2014'
  },
  {
    comm: 'Eat it, just eat it!',
    puntuation: '3 Stars',
    author: 'Michael Jakishan',
    date: 'Feb 17, 2015'
  },
  {
    comm: 'Ultimete, Reaching for the stars!',
    puntuation: '4 Stars',
    author: 'Ringo Starry',
    date: 'Dec 3, 2013'
  },
  {
    comm: 'Its your birthdat, were gonna party!',
    puntuation: '2 Stars',
    author: '25 Cent',
    date: 'Dec 3, 2013'
  }
];
const DISHES: Dish[] = [
  {
    id: '0',
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    // tslint:disable-next-line:max-line-length
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
  },
  {
    id: '1',
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    category: 'appetizer',
    featured: false,
    label: '',
    price: '1.99',
    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
  },
  {
    id: '2',
    name: 'Vadonut',
    image: '/assets/images/vadonut.png',
    category: 'appetizer',
    featured: false,
    label: 'New',
    price: '1.99',
    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
  },
  {
    id: '3',
    name: 'ElaiCheese Cake',
    image: '/assets/images/elaicheesecake.png',
    category: 'dessert',
    featured: false,
    label: '',
    price: '2.99',
    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
  }
 ];

 

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  comments = COMMENTS;
  dishes = DISHES;

  selectedDish: Dish = DISHES[0];
  constructor() { }

  ngOnInit() {
  }

}
