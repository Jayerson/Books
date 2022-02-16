// rafce
import PropTypes from "prop-types";
import styles from "./Card.module.scss";
import React from "react";
import {useState} from "react";

// Catching props from parent container in child component
const Card = ({book}) => {
    const [open, setOpen] = useState(false);
    
    try {
        return (
            <span style={styles} onClick={() => setOpen(!open)}>
                <h2>{book.title}</h2>
                <h3>{book.authors}</h3>
                <img 
                    src={book.imageLinks.thumbnail} 
                    alt="Cover of book"
                />
                { open ? <div>
                    <p>Publisher: {book.publisher},</p>
                    <p>Date of Publication: {book.publishedDate},</p>
                    <p>Language: {book.language},</p>
                    <p>Pages: {book.pageCount}</p>
                </div> : null }
                <p>{book.description}</p>
            </span>
        );
    } catch {
        return (
            <span style={styles} onClick={() => setOpen(!open)}>
                <h2>{book.title}</h2>
                <h3>{book.authors}</h3>
                { open ? <div>
                    <p>Publisher: {book.publisher},</p>
                    <p>Date of Publication: {book.publishedDate},</p>
                    <p>Language: {book.language},</p>
                    <p>Pages: {book.pageCount}</p>
                </div> : null }
                <p>{book.description}</p>
            </span>
        ); 
    }
}

export default Card;

Card.propTypes = {
    desc: PropTypes.object, // we are expecting an object
};
