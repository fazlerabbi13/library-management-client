import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navber = () => {
    const { user, logOut } = useContext(AuthContext);

    const navItems = <>

        <li><Link to="/">Home</Link> </li>
        <li><Link to="/addbooks"> Add Book</Link> </li>
        <li><Link to="/allbooks">All Books</Link> </li>
        <li><Link to="/borrowedbooks">Borrowed Books</Link> </li>
        <li><Link to="/signup">Sign up</Link> </li>

    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <img className="w-24 h-22 ml-5" src={logo} alt="" />
                <a className="btn btn-ghost text-xl">BookHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <div className="flex justify-between items-center">
                        <p className="mr-5">{user.displayName}</p>
                        <img className="w-16 mr-5 rounded-full" alt="Tailwind CSS Navbar component" src={user.photoURL} />
                        <button onClick={logOut}>Logout</button>
                 </div>
                    
                        :
                        <Link to='/signin'>
                            <button className="btn btn-primary">Login</button>

                        </Link>
                }
            </div>
        </div>
    );
};

export default Navber;