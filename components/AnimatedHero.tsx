"use client"

import {
    useScroll,
    useMotionValueEvent,
} from "framer-motion"
import Image from "next/image"
import React, { useRef, useState } from "react"

const images = [
    {
        title: "Passenger vehicles",
        subtitle: "Revving up innovation from interior to exterior",
        buttons: [
            { icon: "/complete-body.svg", label: "Complete body", video: "/PassengerTrim.mp4" },
            { icon: "/front.svg", label: "Front", video: "/Front.mp4" },
            { icon: "/Cabin.png", label: "Cabin", video: "/Cabin.mp4" },
            { icon: "/trunk.svg", label: "Trunk", video: "/Trunk.mp4" },
            { icon: "/exter.svg", label: "Exterior", video: "/Exterior.mp4" },
        ],
    },
    {
        title: "Commercial vehicles",
        subtitle: "Advancing engineering for heavy-duty vehicles",
        buttons: [
            { icon: "/commercial-body.svg", label: "Complete body", video: "/Commercial-body.mp4" },
            { icon: "/commercial-engine.svg", label: "Engine", video: "/Commercial-engine.mp4" },
            { icon: "/commercial-cabin.svg", label: "Cabin", video: "/Commercial-cabin.mp4" },
        ],
    },
]

export default function ParallaxShowcase() {
    const containerRef = useRef(null)
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
    const { scrollYProgress } = useScroll({ container: containerRef })
    const [activeIndex, setActiveIndex] = useState(0)
    const [selectedButtonIndexes, setSelectedButtonIndexes] = useState<number[]>(
        images.map(() => 0) 
    )

    // Update current section index
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.round(latest * (images.length - 1))
        setActiveIndex(index)
    })

    return (
        <>
            <style>{`
                .parallax-wrapper {
                    display: flex;
                    height: 100vh;
                    overflow: hidden;
                    background: black;
                    color: white;
                    position: relative;
                }

                .left-panel {
                    width: 40%;
                    padding: 3rem 2rem 3rem 3.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 4rem;
                    position: sticky;
                    top: 20%;
                    height: 50%;
                }

                .title-block {
                    display: flex;
                    gap: 1rem;
                    align-items: flex-start;
                    transition: opacity 0.3s ease;
                }

                .title-text {
                    font-size: 28px;
                    font-weight: normal;
                }

                .subtitle-text {
                    font-size: 18px;
                    color: white;
                    font-weight: 400;
                    margin-top: 0.25rem;
                }

                .text-group {
                    display: flex;
                    flex-direction: column;
                }

                .progress-line {
                    width: 3px;
                    height: 100%;
                    background-color: rgba(141, 240, 204, 0.2);
                    position: relative;
                }

                .progress-segment {
                    position: absolute;
                    left: 0;
                    width: 100%;
                    height: 50%;
                    background-color: #fff;
                    opacity: 0.5;
                    transition: opacity 0.3s ease;
                }

                .progress-segment.active {
                    opacity: 1;
                }

                .progress-segment.top {
                    top: 0;
                }

                .progress-segment.bottom {
                    bottom: 0;
                }

                .right-panel {
                    width: 60%;
                    overflow-y: scroll;
                    height: 100vh;
                    scroll-snap-type: y mandatory;
                }

                .image-section {
                    height: 100vh;
                    scroll-snap-align: start;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .image-section img {
                    max-width: 100%;
                    max-height: 80vh;
                    object-fit: contain;
                }

                @media (max-width: 768px) {
                    .parallax-wrapper {
                        flex-direction: column;
                    }

                    .left-panel, .right-panel {
                        width: 100%;
                        height: auto;
                        position: static;
                    }

                    .left-panel {
                        padding: 1rem;
                        flex-direction: row;
                        flex-wrap: wrap;
                        gap: 2rem;
                        justify-content: space-around;
                    }

                    .title-text {
                        font-size: 22px;
                    }

                    .subtitle-text {
                        font-size: 16px;
                    }

                    .image-section {
                        height: 80vh;
                    }

                    .progress-line {
                        display: none;
                    };
                }
            `}</style>
            <div className="bg-black hidden lg:block">
                <h2 className="animated-heading hidde w-fit mx-auto md:block text-white text-4xl font-light text-center blade-top-padding-sm xl:pt-6 z-10" style={{ paddingTop: "15.5rem" }}>
                    <span className="sg-translate">Evolving the drive with <span className="font-bold">360-degree</span>
                        <br className="hidden md:block" /> comprehensive solutions</span>
                </h2>

                <div className="parallax-wrapper">
                    
                    {/* Left Title Panel with Line */}
                    <div className="flex left-panel">
                        <div className="progress-line">
                            <div className={`progress-segment top ${activeIndex === 0 ? "active" : ""}`} />
                            <div className={`progress-segment bottom ${activeIndex === 1 ? "active" : ""}`} />
                        </div>
                        <div className="grid gap-20 left-outer">
                            {images.map((img, i) => (
                                <button
                                    key={`title-${i}`}
                                    onClick={() =>
                                        sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="title-block text-left"
                                    style={{ opacity: activeIndex === i ? 1 : 0.5 }}
                                >
                                    <div className="text-group">
                                        <div className="title-text">{img.title}</div>
                                        <div className="subtitle-text">{img.subtitle}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Scroll Panel */}
                    <div className="right-panel" ref={containerRef}>
                        {images.map((img, i) => (
                            <div
                                className="image-section"
                                key={i}
                                ref={(el) => (sectionRefs.current[i] = el)}
                            >
                                <div className="block">
                                    <video
                                        key={img.buttons[selectedButtonIndexes[i]].video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="object-cover"
                                    >
                                        <source
                                            src={img.buttons[selectedButtonIndexes[i]].video}
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video tag.
                                    </video>

                                    <div className="flex flex-cols-5 xl:gap-x-8 place-content-center commercial-controls w-fit mx-auto mt-8">
                                        {img.buttons.map((btn, idx2) => (
                                            <button
                                                key={`control-${i}-${idx2}`}
                                                type="button"
                                                aria-label={btn.label}
                                                onClick={() => {
                                                    const newIndexes = [...selectedButtonIndexes]
                                                    newIndexes[i] = idx2
                                                    setSelectedButtonIndexes(newIndexes)
                                                }}
                                                className={`flex flex-col font-light items-center justify-center transition-opacity duration-300 hover:opacity-100 cursor-pointer ${selectedButtonIndexes[i] === idx2 ? "opacity-100" : "opacity-60"
                                                    }`}
                                            >
                                                <Image
                                                    src={btn.icon}
                                                    alt={btn.label}
                                                    className="max-h-16 pt-1 2xl:max-h-20"
                                                    width={60}
                                                    height={60}
                                                />
                                                <span className="-mt-1 text-sm 2xl:text-base">{btn.label}</span>
                                            </button>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
