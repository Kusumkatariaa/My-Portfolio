import React from "react";
import image from "../assets/images/mail-image.webp"; // Ensure you have the image in the correct path

function Contact() {
    return (
        <section
            id="contact"
            className="text-white py-16 px-6 md:px-12"
        >
            <div className="text-center mb-12">
                <p className="text-sm text-gray-400">You can text me directly</p>
                <h2 className="text-4xl font-bold bg-gradient-to-r  bg-clip-text text-transparent">
                    Write Me
                </h2>
            </div>

            <div className="max-w-4xl flex-row mx-auto from-[#7CC0C4] via-[#548FBA] to-[#3C84C7] rounded-3xl shadow-lg p-6 sm:p-10 flex md:flex-row items-center gap-10 border border-gray-700">
                {/* Left - Illustration */}
                <div className="illustration w-full md:w-1/2">
                    <img
                        src={image} // Replace this with your image import or path
                        alt="Mail Illustration"
                        className="w-full"
                    />
                </div>

                {/* Right - Form */}
                <div className="w-full ">
                    <h3 className="text-2xl font-semibold mb-6">Email Me</h3>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const email = e.target.email.value;
                            const message = e.target.message.value;

                            const res = await fetch("http://localhost:5000/api/send", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ email, message }),
                            });

                            if (res.ok) {
                                alert("Message sent successfully!");
                                e.target.reset();
                            } else {
                                alert("Failed to send message.");
                            }
                        }}
                        className="flex flex-col gap-5"
                    >
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            className="bg-[#1e2633] text-white placeholder-gray-400 p-3 rounded-md border border-gray-600 outline-none focus:ring-2 focus:ring-[#548FBA]"
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your Email"
                            className="bg-[#1e2633] text-white placeholder-gray-400 p-3 rounded-md border border-gray-600 outline-none focus:ring-2 focus:ring-[#548FBA]"
                        />
                        <textarea
                            name="message"
                            required
                            rows="4"
                            placeholder="Your Message"
                            className="bg-[#1e2633] text-white placeholder-gray-400 p-3 rounded-md border border-gray-600 outline-none focus:ring-2 focus:ring-[#548FBA]"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#7CC0C4] via-[#548FBA] to-[#3C84C7] text-white font-semibold py-3 rounded-md hover:opacity-90 transition-all"
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
