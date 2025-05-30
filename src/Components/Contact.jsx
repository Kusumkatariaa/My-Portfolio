import React from "react";
import image from "../assets/images/mail-image.webp"; // Ensure you have the image in the correct path

function Contact() {
    return (
        <section id="contact" className=" text-white py-12 px-4 md:px-10">
            <div className="text-center mb-8">
                <p className="text-sm text-gray-400">You can text me directly</p>
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#7CC0C4] via-[#548FBA] to-[#3C84C7] bg-clip-text text-transparent">
                    Write Me
                </h2>
            </div>

            <div className="">
                {/* Left - Illustration */}
                <div className="w-full md:w-1/2">
                    <img
                        src={image} // replace with your image path
                        alt="Mail Illustration"
                        className="w-full"
                    />
                </div>

                {/* Right - Form */}
                <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Email Me</h3>
                    <form className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-3 rounded-md bg-[#1a1f2c] text-white placeholder-gray-400 outline-none border border-gray-600"
                        />
                        <textarea
                            placeholder="Message..."
                            rows="5"
                            className="p-3 rounded-md bg-[#1a1f2c] text-white placeholder-gray-400 outline-none border border-gray-600"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#7CC0C4] via-[#548FBA] to-[#3C84C7] hover:opacity-90 text-white font-semibold py-3 rounded-md transition-all"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default Contact;
