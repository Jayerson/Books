// rafce
import PropTypes from "prop-types";
import styles from "./Card.module.scss";
import React from "react";

// Catching props from parent container in child component
const Card = ({book}) => {
    try {
        return (
            <span style={styles}>
                <h2>{book.title}</h2>
                <h3>{book.authors}</h3>
                <img src={book.imageLinks.thumbnail} alt="Cover of book"/>
                <p>{book.description}</p>
            </span>
        );
    }
    
    // have to catch error after try

    catch(err) {
        return (
            <span style={styles}>
                <h2>{book.title}</h2>
                <h3>{book.authors}</h3>
                <p>{book.description}</p>
            </span>
        );
    }
   
};

export default Card;

Card.propTypes = {
    desc: PropTypes.object, // we are expecting an object
};
