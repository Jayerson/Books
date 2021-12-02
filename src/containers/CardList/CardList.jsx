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
    
    // call when string is complete:

    useEffect((query) => {
        if (query !== undefined) getBooks(query);
    }, []);

    const handleClick = async () => {
        await setQuery(input);
        if (query !== undefined) await getBooks(query);
        
    }
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
                    <label for="searchTerms">What books are you looking for?</label>
                    <input type="text" id="searchTerms" name="searchTerms" onChange={handleChange}style={styles}/>
                    <button onClick={handleClick}>Search</button>
                </header>
                <div>
                    {
                        books.items ?
                            books.items.map(each => {
                                return <Card book={each.volumeInfo}/> 
                            }) :
                            <Card book={noTitle} />
                    }
                </div>
            </div>
        );  
    }
};

export default CardList;