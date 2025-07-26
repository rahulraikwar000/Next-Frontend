'use client';

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

const passengerSlides = [
    { title: "Complete body", video: "/PassengerTrim.mp4" },
    { title: "Front", video: "/Front.mp4" },
    { title: "Cabin", video: "/Cabin.mp4" },
    { title: "Trunk", video: "/Trunk.mp4" },
    { title: "Exterior", video: "/Exterior.mp4" },
];

const commercialSlides = [
    { title: "Complete body", video: "/Commercial-body.mp4" },
    { title: "Engine", video: "/Commercial-engine.mp4" },
    { title: "Cabin", video: "/Commercial-cabin.mp4" },
];

export default function VehicleVideoSliders() {
    const swiperRef1 = useRef<SwiperClass | null>(null);
    const swiperRef2 = useRef<SwiperClass | null>(null);
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);

    return (
        <div className="bg-black text-white py-12 space-y-16 lg:hidden">
            <h2 className="animated-heading hidde w-fit mx-auto md:block text-white text-3xl font-light text-center blade-top-padding-sm z-10" style={{ paddingTop: "2.3rem" }}>
                <span className="sg-translate">Evolving the drive with<br /> <span className="font-medium">360-degree</span>
                    <br className="hidden md:block" /> comprehensive solutions</span>
            </h2>
            <div className="px-4 text-center">
                <h2 className="text-sky-400 text-xl font-semibold mb-2">Passenger vehicles</h2>
                <p className="text-sm mb-6">Revving up innovation<br /> from interior to exterior.</p>
                <Swiper
                    onSwiper={(swiper) => (swiperRef1.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex1(swiper.activeIndex)}
                    modules={[Pagination]}
                >
                    {passengerSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center">
                                <video
                                    src={slide.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full max-w-md rounded-xl mb-4"
                                />
                                <p className="text-sm">{slide.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center mt-4 gap-2">
                    {passengerSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => swiperRef1.current?.slideTo(index)}
                            className={`transition-all duration-300 ${index === activeIndex2
                                ? 'w-8 h-2 rounded-full bg-sky-500'
                                : 'w-2 h-2 rounded-full bg-gray-600'
                                }`}
                        />

                    ))}
                </div>
            </div>

            <div className="px-4 text-center">
                <h2 className="text-sky-400 text-xl font-semibold mb-2">Commercial vehicles</h2>
                <p className="text-sm mb-6">Advancing engineering <br />for heavy-duty vehicles.</p>
                <Swiper
                    onSwiper={(swiper) => (swiperRef2.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex2(swiper.activeIndex)}
                    modules={[Pagination]}
                >
                    {commercialSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center">
                                <video
                                    src={slide.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full max-w-md rounded-xl mb-4"
                                />
                                <p className="text-sm">{slide.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center mt-4 gap-2">
                    {commercialSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => swiperRef2.current?.slideTo(index)}
                            className={`transition-all duration-300 ${index === activeIndex2
                                ? 'w-8 h-2 rounded-full bg-sky-500'
                                : 'w-2 h-2 rounded-full bg-gray-600'
                                }`}
                        />

                    ))}
                </div>
            </div>
        </div>
    );
}
