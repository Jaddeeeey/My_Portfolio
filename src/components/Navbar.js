// import { Link } from 'react-router-dom';

// const Navbar = () => (
    // <nav className="bg-black text-white p-4 fixed w-full top-0 left-0 z-50 shadow-md">
    //     <div className="max-w-7xl mx-auto flex justify-between items-center">
    //         <h1 className="text-2xl font-bold">My Portfolio</h1>
    //         <div className="space-x-6 hidden md:flex">
    //             <Link to="/" className="hover:text-gray-300 transition-colors duration-200">
    //                 Home
    //             </Link>
    //             <Link to="/about" className="hover:text-gray-300 transition-colors duration-200">
    //                 About
    //             </Link>
    //             <Link to="/projects" className="hover:text-gray-300 transition-colors duration-200">
    //                 Projects
    //             </Link>
    //             <Link to="/contact" className="hover:text-gray-300 transition-colors duration-200">
    //                 Contact
    //             </Link>
    //         </div>
    //     </div>
    // </nav>
// );

// export default Navbar;

// function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
//       <ul className="flex gap-6 p-4 justify-center">
//         <li><a href="#about">About</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }


// export default Navbar;

function Navbar() {
    return (
        <nav className="bg-black text-white p-4 fixed w-full top-0 left-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold" href="#about">My Portfolio</h1>
                <div className="space-x-6 hidden md:flex">
                    <a href="#aboutme" className="hover:text-gray-300 transition-colors duration-200">
                        About
                    </a>
                    <a href="#projects" className="hover:text-gray-300 transition-colors duration-200">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-gray-300 transition-colors duration-200">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

