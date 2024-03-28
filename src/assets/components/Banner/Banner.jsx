import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse p-14">
                <img src="images/bannar.png" className="max-w-lg rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br/> your bookshelf</h1>
                    {/* Wrap the button in the Link component */}
                    <Link to="/ListedBooks">
                        <button className="btn mt-10 bg-[#23BE0A] text-white">View The List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
