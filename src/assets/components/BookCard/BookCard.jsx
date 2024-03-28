import { FaRegStar} from "react-icons/fa6";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const {bookId, bookName, author, image, category, rating, tags } = book;

    return (
        <Link to={`/BookCard/${bookId}`}>
        <div className="card bg-base-100 border-2">
            <div className="px-6 pt-8">
            <figure className="bg-base-200 p-6 rounded-lg w-76 "><img src={image} alt={bookName} /></figure>
            </div>
            <div className="card-body">
            <div className="flex gap-4">
            {tags && tags.map((tag, index) => (
                        <div key={index} className="badge font-semibold bg-green-100 p-4 text-[#23BE0A]">{tag}</div>
                    ))}
            </div>
                <h2 className="card-title">{bookName}</h2>
                <p className=" border-b-2 pb-3"><span>By : </span>{author}</p>
                <div className="card-actions mt-2">
                    <div>{category}</div>
                <p className="flex gap-2 justify-end">{rating}<FaRegStar className="text-xl"></FaRegStar></p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default BookCard;
