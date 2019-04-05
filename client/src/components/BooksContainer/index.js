import React, { Component } from "react";
import Form from "../Form";
import Card from "../Card";
import API from "../../utils/API";

class BooksContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchBooks("Basics Of Javascript");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => {
        console.log(res);
        this.setState({ result: res.data.items })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  addBook = (title,author,image,desc,link) => {
      API.saveBook({
        title: title,
        author: author,
        description: desc,
        image:image,
        link:link
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    
  };

  render() {
    return (
      <div className="container-fluid">
      
        <Form
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        {this.state.result.map(book =>
          <Card
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors[0]}
            imageLink={book.volumeInfo.imageLinks.thumbnail}
            summary={book.volumeInfo.description.substring(0,400)}
            link={book.volumeInfo.previewLink}
            onClick={()=>this.addBook(book.volumeInfo.title,book.volumeInfo.authors[0],book.volumeInfo.imageLinks.thumbnail,book.volumeInfo.description.substring(0,400),book.volumeInfo.previewLink)}
          >Save Book</Card>
        )}
      </div>

    );
  }
}
export default BooksContainer;
