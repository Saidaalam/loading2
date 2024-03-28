import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);
    const [readAdded, setReadAdded] = useState(false);
    const [wishlistAdded, setWishlistAdded] = useState(false);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch('../books.json');
                const data = await response.json();
                const foundBook = data.books.find((book) => book.bookId === parseInt(bookId));
                setBook(foundBook);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBook();
    }, [bookId]);

    const handleReadClick = () => {
        if (!readAdded) {
            setReadAdded(true);
            addToLocalStorage(bookId, 'read');
            toast.success("Book added to Read list successfully.");
        } else if(readAdded) {
            toast.error("Book already added to Read list.");
        }
    };

    const handleWishlistClick = () => {
        if (!wishlistAdded && !readAdded) {
            setWishlistAdded(true);
            addToLocalStorage(bookId, 'wishlist');
            toast.success("Book added to Wishlist successfully.");
        } else if (wishlistAdded && !readAdded) {
            toast.warning("Book already added to Wishlist.");
        } else if (readAdded) {
            toast.error("Book already added to Read list. Cannot add to Wishlist.");
        }
    };

    const addToLocalStorage = (bookId, listType) => {
        const existingItems = JSON.parse(localStorage.getItem(listType)) || [];

        if (!existingItems.includes(bookId)) {
            existingItems.push(bookId);
            localStorage.setItem(listType, JSON.stringify(existingItems));
        }
    };

    return (
        <div className="card card-side bg-base-100 mt-10 gap-6">
            <div className='bg-base-200 w-1/3 p-16 rounded-xl'>
                <figure><img src={book?.image} alt={book?.bookName} /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold">{book?.bookName}</h2>
                <p className='font-bold mt-4 text-xl'><span>By : </span>{book?.author}</p>
                <p className='mt-2 text-xl'>{book?.category}</p>
                <p className='mt-2'><span className='font-bold'>Review : </span>{book?.review}</p>
                <div className="flex gap-4"><span className='font-bold'>Tag</span>
                    {book?.tags && book.tags.map((tag, index) => (
                        <div key={index} className="badge font-semibold bg-green-100 p-4 text-[#23BE0A]">{tag}</div>
                    ))}
                </div>
                <p><span>Number of Pages : </span><span className='ml-14'>{book?.totalPages}</span></p>
                <p><span>Publisher : </span><span className='ml-28'>{book?.publisher}</span></p>
                <p><span>Year of Publishing : </span><span className='ml-14'>{book?.yearOfPublishing}</span></p>
                <p><span>Rating : </span><span className='ml-36'>{book?.rating}</span></p>
                <div className="card-actions gap-4 mt-4">
                    <button
                        onClick={handleReadClick}
                        className="border-2 px-8 py-2 rounded-xl bg-base-100 hover:text-white hover:bg-[#50B1C9]"
                    >
                        Read
                    </button>
                    <button
                        onClick={handleWishlistClick}
                        className="border-2 px-6 py-2 rounded-xl bg-base-100 hover:text-white hover:bg-[#50B1C9]"
                    >
                        Wishlist
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
