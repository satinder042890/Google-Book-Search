import React, { Component } from "react";
import Form from "../Form";
import Card from "../Card";
import API from "../../utils/API";

class SavedBooks extends Component {
  state = {
    result: [],
    search: ""
  };
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ result: res.data})
      )
      .catch(err => console.log(err));
  };
  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.loadBooks();
  }

  deleteBook= id =>{
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }
  

  render() {
    return (
      <div className="container-fluid">
        {this.state.result.map(book =>
          <Card
            title={book.title}
            authors={book.author}
            imageLink={book.image}
            summary={book.description}
            link={book.link}
            onClick={()=>this.deleteBook(book._id)}
          >Delete Book</Card>
        )}
      </div>

    );
  }
}
export default SavedBooks;
