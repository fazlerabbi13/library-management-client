import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h1 className="text-9xl mt-10 font-extrabold">404</h1>
            <h3 className="text-4xl mt-5 font-bold">Page Not Found</h3>
            <p className="text-xl mt-2 font-semibold">The page you are looking for exist or an
             other error occured.Go to <Link to='/' className="text-blue-700">Home</Link></p>
        </div>
    );
};

export default ErrorPage;