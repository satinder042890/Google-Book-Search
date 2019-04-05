import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
    return (
        <div className="container-fluid teal borderYtoX">
            <img className ="navImage" src="https://ebookfriendly.com/wp-content/uploads/2016/08/Books-in-animated-gifs-books-dancing-waltz.gif" alt ="notfound"></img>
            <Link to="/" className={window.location.pathname === "/"}> <a href="https://www.google.com/">Search Books</a></Link>
            <Link to="/saved" className={window.location.pathname === "/saved"}>
          
        <a href="https://www.google.com/">Save Books</a></Link>
            <img className ="navImage" src="https://ebookfriendly.com/wp-content/uploads/2016/08/Books-in-animated-gifs-books-dancing-waltz.gif" alt ="notfound"></img>
        </div>
    )
}

export default Navbar;