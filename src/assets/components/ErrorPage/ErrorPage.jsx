import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center p-10 border-2 w-1/3 text-2xl mt-20 m-auto font-bold">
            <h2 className="mb-10 mt-4">Opps!!! 404 route page not found.</h2>
            <Link to="/" className="bg-[#23BE0A] p-4 text-white ">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;