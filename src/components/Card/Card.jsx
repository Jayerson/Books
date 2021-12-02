// rafce
import PropTypes from "prop-types";
import styles from "./Card.module.scss";
import React from "react";

const author = ({book}) => book.authors.join(", ");

// Catching props from parent container in child component
const Card = ({book}) => {
    console.log(book.imageLinks.thumbnail);
    return (
        <span style={styles}>
            <h2>{book.title}</h2>
            <h4>{author}</h4>
            <img src={book.imageLinks.thumbnail} alt="Cover of book"/>
            <p>{book.description}</p>
        </span>
    );
};

export default Card;

Card.propTypes = {
    desc: PropTypes.object, // we are expecting an object
};
