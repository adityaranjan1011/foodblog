import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-blog',
  templateUrl: './food-blog.component.html',
  styleUrls: ['./food-blog.component.scss']
})
export class FoodBlogComponent implements OnInit {


  public newCard = [
    {
      "title": "nkooadf"
    }
  ]
  public count: number;


  public foodData = [
    {
      "id": 1,
      "title": "CORONATION RICE SALAD",
      "image": "assets/image/riceSalad.jpg",
      "desc": " This curried rice salad is more salad, less pulao because it requires you to toss everything together off heat, then refrigerate the rice for the flavours to develop. It’s a spin on the classic coronation chicken sandwich filling, but with no chicken involved. The idea of a coronation anything is really very simple— there are curry powder and raisins, an element of chilli and some warming spice It’s a spin on the classic coronation chicken sandwich filling, but with no chicken involved. The idea of a coronation anything is really very simple— there are curry powder and raisins, an element of chilli and some warming spice."
    },
    {
      "id": 2,
      "title": "BRUSCHETA STYLE PORK & PASTA",
      "image": "assets/image/orangecake.jpg",
      "desc": " Kinnow oranges are local to us. Their peels, when cooked down, fall apart quite easily.This is the kind of orange I prefer to work with when making a good Orange and almond cake.It’s a pleasant mix of sweet and sour that is carried beautifully by the moist almond crumb. Cut into neat thin slices, I say thin because the cake can be quite heavy, and serve with some whipping cream, whipped to soft peaks."

    },
    {
      "id": 3,
      "title": "BRUSCHETA STYLE PORK & PASTA",
      "image": "assets/image/orangecake.jpg",
      "desc": " Kinnow oranges are local to us. Their peels, when cooked down, fall apart quite easily.This is the kind of orange I prefer to work with when making a good Orange and almond cake.It’s a pleasant mix of sweet and sour that is carried beautifully by the moist almond crumb. Cut into neat thin slices, I say thin because the cake can be quite heavy, and serve with some whipping cream, whipped to soft peaks."

    },
    {
      "id": 4,
      "title": "BRUSCHETA STYLE PORK & PASTA",
      "image": "assets/image/orangecake.jpg",
      "desc": " Kinnow oranges are local to us. Their peels, when cooked down, fall apart quite easily.This is the kind of orange I prefer to work with when making a good Orange and almond cake.It’s a pleasant mix of sweet and sour that is carried beautifully by the moist almond crumb. Cut into neat thin slices, I say thin because the cake can be quite heavy, and serve with some whipping cream, whipped to soft peaks."

    },  
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addNew() {
    console.log("aditya", this.foodData);

  }
}
