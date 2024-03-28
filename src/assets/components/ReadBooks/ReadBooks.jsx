import { Link } from 'react-router-dom';
import data from './books.json';

const ReadBooks = () => {
    const { books } = data;
    const book = books[0]; 

    return (
        <div className="card card-side bg-base-100 shadow-xl gap-24">
            <figure><img src={book.image} alt="Book" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-xl">{book.bookName}</h2>
                <p className='text-start mt-2'><span>By: </span>{book.author}</p>
                <div className="flex gap-4">
                    {book.tags && book.tags.map((tag, index) => (
                        <div key={index} className="badge font-semibold bg-green-100 p-4 text-[#23BE0A]">{tag}</div>
                    ))}
                    <p><span>Year of Publishing: </span><span className='ml-2'>{book.yearOfPublishing}</span></p>
                </div>
                <div className='flex text-start'>
                    <p><span>Publisher : </span><span className='ml-2'>{book.publisher}</span></p>
                    <p><span  className='mr-6'>Pages : </span><span className='ml-2'>{book.totalPages}</span></p>
                </div>
                <div className='flex text-start'>
                    <p className='mt-2'><span>Category : </span>{book.category}</p>
                    <p><span  className='ml-6'>Rating : </span><span className='ml-2'>{book.rating}</span></p>
                    <Link to="/BookDetails">
                        <button className="btn bg-[#23BE0A] text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReadBooks;
