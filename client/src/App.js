import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BooksContainer from "./components/BooksContainer";
import SavedBooks from "./components/SavedBooks";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <div>
      <Navbar /> 
      <Switch>
        <Route exact path="/" component={BooksContainer} />
        <Route exact path="/saved" component={SavedBooks} />
      </Switch>
      </div>
       
    </Router>
  )
}

export default App;
