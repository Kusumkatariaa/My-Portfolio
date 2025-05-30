import React from 'react';
import '../Styles/home.css';

function Home() {
    return (
        <div id="home" className="my-24 flex items-center justify-center px-6">
            <div className="flex md:flex-row items-center justify-between max-w-7xl w-full">

                {/* Left Text */}
                <div className="text-white max-w-4xl">
                    <p className="text-gray-300 text-2xl lg:text-3xl xl:text-4xl text-left mb-4">
                        Hey, there <span className="inline-block">👋🏾</span>
                    </p>
                    <h1 className="text-left text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-3">
                        I'm <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
                            Kusum Kataria
                        </span>
                    </h1>

                    <h2 className="text-left text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
                        a <span className="text-white">Software Engineer</span>
                    </h2>

                    <p className="text-left text-white/60 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 max-w-2xl">
                        currently focused on building user experiences that drive growth.
                    </p>
                </div>


                {/* Right Image */}
                <div className="mb-8 md:mb-0 md:ml-12 transform rotate-3 bg-[#f3e5dc] p-2 rounded-[20px]">
                    <img
                        src="https://avatars.githubusercontent.com/u/100646626?v=4"
                        alt="Kusum Kataria"
                        className="w-64 h-80 object-cover rounded-[20px] -rotate-3"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;    