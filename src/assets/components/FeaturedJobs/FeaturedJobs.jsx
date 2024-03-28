import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const FeaturedJobs = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data.books));
    }, []);

    return (
        <div>
            <div>
                <h2 className="text-4xl font-bold text-center mt-4">Books</h2>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
                {
                    books.map(book => <BookCard key={book.bookId} book={book}></BookCard>) 
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;
