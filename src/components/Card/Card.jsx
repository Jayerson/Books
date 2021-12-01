// rafce
import PropTypes from "prop-types";
import styles from "./Card.module.scss";

// Catching props from parent container in child component
const Card = ({book}) => {
    return (
        <span style={styles}>
            <h2>{book.title}</h2>
            <p>{book.authors}</p>
            <img src={book.imageLinks.thumbnail} alt="Cover of book"/>
            <p>{book.description}</p>
        </span>
    );
};

export default Card;

Card.propTypes = {
    desc: PropTypes.object, // we are expecting an object
};
