import Card from "../../components/Card";
import {useState, useEffect} from "react";
import styles from "./CardList.module.scss";

const CardList = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const getBooks = async (query) => {
        const response = await fetch(`https://books.googleapis.com/books/v1/volumes?q=${query}`);

        // query will be the text input box value

        const books = await response.json();
        setBooks(books);
    }
    
    const handleClick = () => {
        setQuery(input);        
    }

    // call when string is complete:

    useEffect((query) => {
        if (query !== "") getBooks(query);
    }, []);

    useEffect(() => {
        if (query !== "") getBooks(query);
    }, [query]);

    
    const noTitle = {
        title: "No Title",
        authors: "",
        description: "No book found, try more common phrases or keywords"
    }

    // send object
    if (books) {
        return (
            <div style={styles}>
                <header>
                    <h1>Find a Book</h1>
                    <label htmlForfor="searchTerms">What books are you looking for?</label>
                    <input type="text" id="searchTerms" name="searchTerms" onChange={handleChange} style={styles}/>
                    <button onClick={handleClick}>Search</button>
                    <em>Click on a book for more info</em>
                </header>
                <div>
                    {
                        books.items ?
                            books.items.map(each => {
                                return <Card key={each.id} book={each.volumeInfo} /> 
                            }) :
                            <Card book={noTitle} />
                    }
                </div>
            </div>
        );  
    }
};

export default CardList;