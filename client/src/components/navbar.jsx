import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [show, setshow] = useState(false);

    const showfun = () => {
        setshow(!show);
    };

    return (
        <div>
            <nav class="flex items-center justify-between flex-wrap bg-white p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <span class="font-semibold text-xl tracking-tight text-black">
                        <i class="fa-solid fa-code"></i> DevHelp
                    </span>
                </div>
                <div class="block lg:hidden">
                    <button
                        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                        onClick={showfun}
                    >
                        <svg
                            class="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            color="black"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={
                        show
                            ? "block w-full flex-grow lg:flex lg:items-center lg:w-auto"
                            : "hidden md:block lg:block w-full flex-grow lg:flex lg:items-center lg:w-auto"
                    }
                >

                    <section class="w-full px-8 text-gray-700 ">
                        <div class="container flex flex-col flex-wrap items-center justify-between mx-auto md:flex-row max-w-7xl">
                            <div class="relative flex lg:flex-col flex-row">
                                <nav class="flex flex-col lg:flex-row items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200 lg:gap-0 gap-5">
                                    <Link to="/">
                                    <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</a>
                                    </Link>
                                    <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Features</a>
                                    <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
                                    <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                                </nav>
                            </div>

                            <div class="inline-flex flex-col lg:flex-row items-center lg:ml-5 lg:space-x-6 lg:justify-end lg:gap-0 gap-5">
                                <Link to="/login">
                                <a href="#" class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                                    Sign in
                                </a>
                                </Link>
                                <Link to="/register">
                                <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                    Sign up
                                </a>
                                </Link>
                            </div>
                        </div>
                    </section>

                </div>
            </nav>

        </div>
    );
};

export default Navbar;