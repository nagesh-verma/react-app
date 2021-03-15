import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import ErrorMessage from "../common/ErrorMessage";
import Loader from "../common/Loader";

class DisplayCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      categories: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            categories: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, categories } = this.state;
    if (error) {
      return <ErrorMessage message={error.message} />;
    } else if (!isLoaded) {
      return <Loader divClass = "spinner-border" role = "status" spanClass = "sr-only"/>;
    }
    return (
      <section className = "category">
        {categories
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .filter((category) => category.enabled === true)
          .map((category) => (
            <CategoryItem key={category.key} data={category} />
          ))}
      </section>
    );
  }
}

export default DisplayCategories;
