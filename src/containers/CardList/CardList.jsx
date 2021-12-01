import Card from "../../components/Card";
import {useState, useEffect} from "react";
import styles from "./CardList.module.scss";

const CardList = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    const input = "";

    const handleChange = (event) => {
        input = event.target.value;
    }

    const getBooks = async (query) => {
        const response = await fetch(`https://books.googleapis.com/books/v1/volumes?q=${query}`); 
// query will be the text input box value

        const books = await response.json();
        setBooks(books.items);
    }
// call when string is complete
    useEffect(() => {
        getBooks();
    }, []);

    const handleClick = () => {
        setQuery(input)
    }
// send object
    return (
        <div style={styles}>
            <header>
                <h1>Find a Book</h1>
                <label for="searchTerms">What books are you looking for?</label>
                <input type="text" id="searchTerms" name="searchTerms" onChange={handleChange}/>
                <button onClick={handleClick}>Search</button>
            </header>
            <div>
                {books.map(volume => {
                    return <Card book={volume.volumeInfo}/> 
                })}
            </div>
        </div>
    );
};

export default CardList;