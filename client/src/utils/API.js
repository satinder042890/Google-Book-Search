import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
