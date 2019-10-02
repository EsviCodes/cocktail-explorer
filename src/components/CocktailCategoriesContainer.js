import React, { Component } from "react";
import request from "superagent";
import CocktailCategories from "./CocktailCategories";

export default class CocktailCategoriesContainer extends Component {
  state = {
    cocktailCategories: null
  };

  componentDidMount() {
    request
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(response => {
        const cocktailCategories = response.body.drinks.map(
          object => object.strCategory
        );
        //console.log("Categories", cocktailCategories);
        this.updateCategories(cocktailCategories);
      }) // get cocktailCategories
      .catch(console.error);
  }

  updateCategories(cocktailCategories) {
    this.setState({ cocktailCategories: cocktailCategories });
  }
  render() {
    return (
      <CocktailCategories cocktailCategories={this.state.cocktailCategories} />
    );
  }
}
