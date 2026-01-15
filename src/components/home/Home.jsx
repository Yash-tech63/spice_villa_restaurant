import React, { useRef, useState } from 'react'
import Navbar from '../../Navbar'
import Card from '../home/Card'
import Onlina from '../home/Onlina'
import Dishes from '../home/Dishes'
import Footer from '../home/Footer'
import { span } from 'framer-motion/client'


const Home = () => {
    const [active1, setActive1] = useState("online");
    const containerRef = useRef(null);
    const onlineRef = useRef(null);
    const dineoutRef = useRef(null);

    const [component, setcomponent] = useState(false)


    return (
        <Navbar>
            <div className='px-20'>
                <div>
                    <div className='relative'>
                        <img className="w-full h-[400px] object-cover rounded-2xl"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png" alt="" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 rounded-2xl text-center px-6">
                            <h1 className="text-4xl font-bold text-white mb-4">
                                Spice Villa Restaurant
                            </h1>

                            <p className="text-white max-w-2xl text-lg">
                                Spice Villa Restaurant is a well-known multi-cuisine restaurant
                                located on Dumas Road, near Iscon Mall, Piplod, Surat. It’s
                                particularly popular for its diverse menu, pleasant ambience, and
                                quality service.
                            </p>
                        </div>

                    </div>
                </div>
                <div ref={containerRef} className="relative  ">
                    <div className="flex items-center justify-around mb-3 mt-12">
                        <button
                            ref={onlineRef}
                            onClick={() => { setActive1("online"); setcomponent(false) }}
                            className={`button ${active1 === "online" ? "font-semibold" : ""
                                }`}
                        >
                            Order Online
                        </button>

                        <button
                            ref={dineoutRef}
                            onClick={() => { setActive1("dineout"); setcomponent(true) }}
                            className={`button ${active1 === "dineout" ? " font-semibold" : ""
                                }`}
                        >
                            View Dineout
                        </button>
                    </div>

                    {/* Underline */}
                    <span
                        className={`absolute bottom-0 h-[2px] bg-black transition-all duration-300`}
                        style={{
                            width: "50%",
                            left: active1 === "online" ? "0%" : "50%",
                        }}
                    />
                </div>
                {/* <hr /> */}
                <div className='flex items-center justify-between mt-9 w-6/12 yash'>
                    <button  > filter <i className="ri-equalizer-line"></i> </button>
                    <button>
                        <select name=" sortby" defaultValue="sort by" className='rounded w-20  '>
                            <option value="">sort by</option>
                            <option value="Relevance">Relevance</option>
                            <option value="Distance: Nearby To Far"> Distance: Nearby To Far</option>
                            <option value="Popularity: High to Low">Popularity: High to Low</option>
                            <option value="Cost for two: Low to High">Cost for two: Low to High</option>
                            <option value="Cost for two: High to Low">Cost for two: High to Low</option>
                        </select>
                    </button>
                    <button>Book a table</button>
                    <button>Rating 4+</button>
                    <button>Pure Veg</button>
                    <button>Serves Alcohol</button>

                </div>
                {
                    component && component ? <Card /> : <Dishes />
                }

                {/* <Card /> */}
                {/* <Onlina /> */}
                {/* <Dishes /> */}

            </div>

        </Navbar >
    )
}

export default Home
