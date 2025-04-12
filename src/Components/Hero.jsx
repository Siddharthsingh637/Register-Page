import React from 'react'
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <div className="bg-white">


            {/* Hero Content */}
            <div className="relative isolate px-6 pt-50 lg:px-8">
                <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-30 text-center">
                    <h1 className="text-5xl font-semibold text-gray-900 sm:text-7xl">
                        WELCOME
                    </h1>
                    <p className="mt-8 text-lg text-gray-600 sm:text-xl">
                        JOIN NOW TO BECOME OUR FAMILY
                    </p>
                    <div className="mt-10 flex justify-center gap-x-6">
                        <Link to="/signup" className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition">
                            Get Started Today
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Hero
