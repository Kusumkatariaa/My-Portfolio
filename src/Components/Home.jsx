import React from 'react';
import '../Styles/home.css';

function Home() {
    return (
        <div id="home" className="my-20 px-6 flex justify-center">
            <div className="flex flex-col md:flex-row items-start justify-between max-w-7xl w-full gap-8">

                {/* Text Section */}
                <div className="text-white max-w-2xl w-full">
                    <p className="text-gray-300 text-lg sm:text-xl mb-3 text-left">
                        Hey, there <span className="inline-block">👋🏾</span>
                    </p>

                    <h1 className="text-left text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
                        I'm <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
                            Kusum Kataria
                        </span>
                    </h1>

                    <h2 className="text-left text-3xl sm:text-4xl font-extrabold mb-4">
                        a <span className="text-white">Software Engineer</span>
                    </h2>

                    <p className="text-left text-white/60 text-base sm:text-lg md:text-xl mt-2 leading-relaxed">
                        currently focused on building user experiences that drive growth.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-full flex justify-center md:justify-end">
                    <div className="bg-[#f3e5dc] p-2 rounded-[20px] transform rotate-3">
                        <img
                            src="https://avatars.githubusercontent.com/u/100646626?v=4"
                            alt="Kusum Kataria"
                            className="w-60 h-72 object-cover rounded-[20px] -rotate-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;    