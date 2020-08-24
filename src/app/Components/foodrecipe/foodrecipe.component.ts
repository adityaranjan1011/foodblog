import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodrecipe',
  templateUrl: './foodrecipe.component.html',
  styleUrls: ['./foodrecipe.component.scss']
})
export class FoodrecipeComponent implements OnInit {

  public data =
    {
      "id": "1",
      "title": "Coornation Rice Salad",
      "image": "assets/image/riceSalad.jpg",
      "desc": " This curried rice salad is more salad, less pulao because it requires you to toss everything together off heat, then refrigerate the rice for the flavours to develop. It’s a spin on the classic coronation chicken sandwich filling, but with no chicken involved. The idea of a coronation anything is really very simple— there are curry powder and raisins, an element of chilli and some warming spice. I add apples and a green pepper here because it adds something fun and crunchy in contrast to the curry and sweetness. SO YEAH, make this if you have leftover rice at home and I’m sure you’ll fall in love with it as much as I have.",
      "author_detail": " I’m xyz, and welcome to Belly Over Mind- a space where I aggregate my food ideas in the form of recipes, as well as feature stories.",
      "author_label": "author",
      "author_name": "XYZ",
      "food_brief": "Why am I calling this a salad and not a pulao? Because after I'm done tossing the rice in the flavoured oil, I take it off the heat and add other different textural elements to it before tossing again and letting it refrigerate. Tastes great warm, as well as cold.",
      "yeilds": "yeilds",
      "quantity": "4 servings or serves 2 very hungry people",
      "recipe_title": "Ingredients",
      "food_details": [
        {
          "item": "Cooked rice 300g, preferably refrigerated from the night before"
        },
        { "item": "Vegetable oil 3-4 tbsp" },
        { "item": "Sesame oil 1 tsp" },
        { "item": "Cumin seeds 1 tsp" },
        { "item": "Green chilli 1, slit lengthwise and finely chopped" },
        { "item": "Chilli powder 1 tsp" },
        { "item": "Turmeric powder 1/2 tsp" },
        { "item": "Madras curry powder 2 tbsp" },
        { "item": "Indian lime pickle 1 tbsp, chopped" },
        { "item": "Onion 1 large, chopped" },
        { "item": "Coriander leaves, freshly chopped (not the stems this time) 1/4 cup, finely chopped" },
        { "item": "Raisins 1/2 cup" },
        {"item": "Apple 1 cut into matchsticks"},
        {"item": "Green capsicum 1/2, cut into matchsticks and then chopped into little cubes"},
        {"item": "Honey 1 tbsp"},
        {
          "item": " Salt and pepper"
        }
      ],
    }


  constructor() { }

  ngOnInit(): void {
    console.log(this.data.food_details[0]);
  }

}
