export default function Footer() {
    return (
        <footer className="bg-[#12141e] pt-12 px-12">
            <div className="container">
                <div className="sm:flex items-center px-6 justify-between md:gap-8">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-4xl font-medium tracking-tight text-white">Subscribe to our newsletter</h2>
                        <p className="mt-4 text-base text-gray-300">
                            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                            dolore.
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                autoComplete="email"
                                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="w-full sm:w-auto sm:row-auto">
                        <p className="text-gray-300 leading-7 mt-4 sm:mt-0 text-lg">
                            Integer scelerisque dapibus ipsum efficitur gravida. Donec cursus, libero vitae faucibus vestibulum, felis sem cursus enim, non consectetur lectus massa non nunc.
                        </p>
                        <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
                            <span className="text-gray-300 font-[500] text-[18px]">Follow Us:</span>
                            {["twitter", "linkedin", "facebook", "instagram"].map((platform, index) => (
                                <span
                                    key={index}
                                    className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center hover:bg-indigo-800"
                                >
                                    <a
                                        href={
                                            platform === "twitter"
                                                ? "#"
                                                : platform === "linkedin"
                                                ? "#"
                                                : platform === "facebook"
                                                ? "#"
                                                : "#"
                                        }
                                        className="text-gray-300 font-[500] text-[18px]"
                                    >
                                        <i className={`ri-${platform}-line`}></i>
                                    </a>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <ul className="flex items-center justify-center gap-10 mt-10">
                        {["Home", "About Us", "Our Services", "Contact Us"].map((menu, index) => (
                            <li key={index}>
                                <a
                                    className="text-indigo-400 font-[600]"
                                    href={`#${menu.toLowerCase()}`}
                                >
                                    {menu}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className="pt-3 mt-14"/>
            <div className="py-3 ">
                <div className="container">
                    <div className="flex items-center justify-center sm:justify-center">
                        <div className="hidden sm:block">
                        </div>
                        <div>
                            <p className="text-gray-400 text-[14px]">
                                &copy; 2025 - IT TECHNOLOGY
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
