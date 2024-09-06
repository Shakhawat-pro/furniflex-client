import { Link } from "react-router-dom";
import logo from "../../assets/bigLogo.png";
import bgImg from "../../assets/chris-lee.png";
import Social from "../../Components/Social";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Register = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="flex h-screen">
            <div className="w-full  my-auto">
                <div className="w-7/12 rounded-lg shadow-sm mx-auto px-8 py-12 font-medium bg-[#FAFAFA]">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold">Welcome To</h1>
                        <h1 className="text-5xl font-bold my-2">Furni<span className="text-[#1E99F5]">Flex</span></h1>
                        <p className="text-[#707070]">Signup for purchase your desire products</p>
                    </div>
                    <form className="mt-8">
                        <div className="flex gap-2">
                            <div className="border-2 w-full rounded-md bg-white  px-2 py-1  flex flex-col">
                                <label>First Name</label>
                                <input type="text" placeholder="Enter First Name" className="outline-none" />
                            </div>
                            <div className="border-2 w-full rounded-md  bg-white  px-2 py-1  flex flex-col">
                                <label>Last Name</label>
                                <input type="text" placeholder="Enter Last Name" className="outline-none" />
                            </div>
                        </div>
                        <div className="border-2 w-full rounded-md mt-4 bg-white  px-2 py-1  flex flex-col">
                            <label>Email</label>
                            <input type="text" placeholder="Enter Your Email" className="outline-none" />
                        </div>
                        <div className="relative border-2 w-full rounded-md mt-4 bg-white  px-2 py-1  flex flex-col">
                            <label>Password</label>
                            <input type={show ? `password` : 'text'} placeholder="••••••••••••••••" className="outline-none" />
                            <div onClick={() => setShow(!show)} className="absolute right-3 top-4 text-2xl">
                                {show ? <IoIosEyeOff /> : <IoIosEye />}
                            </div>
                        </div>
                        <div className="flex items-center mt-3 gap-2">
                            <input type="checkbox" id="" className="h-4 w-4" />
                            <label className="text-black">
                                I agree to the <a className="underline">Terms & Policy</a>
                            </label>
                        </div>
                        <input type="submit" value="Sign In" className="border-2 my-5 bg-black text-white w-full py-4 rounded-lg" />
                    </form>
                    <div className="flex items-center justify-center w-full">
                        <div className="border-t border-gray-300 flex-grow"></div>
                        <span className="px-4 text-gray-500">OR</span>
                        <div className="border-t border-gray-300 flex-grow"></div>
                    </div>
                    <Social></Social>
                    <h1 className="text-center font-semibold mt-5">Have an account? <Link to={'/login'} className="text-blue-500 hover:underline">Sign In</Link></h1>
                </div>
            </div>
            <div className="text-white w-full content-center text-center" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
                <img className="mx-auto w-20" src={logo} alt="" />
                <h1 className="text-5xl font-bold my-2">Furni<span className="text-[#1E99F5]">Flex</span></h1>
                <p className="w-[450px] mx-auto">
                    Discover a seamless shopping experience with our curated collection of
                    products. From fashion to electronics, we bring quality.
                </p>
            </div>
        </div>
    );
};

export default Register;