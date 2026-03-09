

import React, { useEffect, useRef } from "react";

import { HOME_RESULTS } from "../constants";

import { ExternalLink, Github } from "lucide-react";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);



const HomeProjects: React.FC = () => {

    const sectionRef = useRef<HTMLElement>(null);

    const cardsRef = useRef<HTMLDivElement>(null);



    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.fromTo(

                cardsRef.current?.children || [],

                { y: 60, opacity: 0 },

                {

                    y: 0,

                    opacity: 1,

                    duration: 0.8,

                    stagger: 0.2,

                    ease: "power3.out",

                    scrollTrigger: {

                        trigger: cardsRef.current,

                        start: "top 80%",

                    },

                }

            );

        }, sectionRef);

        return () => ctx.revert();

    }, []);



    return (

        <section ref={sectionRef} className="py-24 bg-transparent">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">

                        Our Results

                    </h2>

                    <h3 className="text-4xl font-extrabold text-white">

                        Featured Projects

                    </h3>

                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">

                        A glimpse into the innovative solutions we've delivered for our clients and partners.

                    </p>

                </div>



                <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">

                    {HOME_RESULTS.map((project, i) => (

                        <div

                            key={i}

                            className="

                group bg-slate-900/50 backdrop-blur border border-slate-700 

                rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-500/50 

                transition-all duration-300 flex flex-col

              "

                        >

                            <div className="h-48 overflow-hidden relative">

                                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10" />

                                <img

                                    src={project.image}

                                    alt={project.title}

                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"

                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}

                                />

                            </div>



                            <div className="p-8 flex-grow flex flex-col">

                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">

                                    {project.title}

                                </h4>

                                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">

                                    {project.description}

                                </p>



                                <div className="flex flex-wrap gap-2 mb-6">

                                    {project.tags.map((tag, tIndex) => (

                                        <span

                                            key={tIndex}

                                            className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700"

                                        >

                                            {tag}

                                        </span>

                                    ))}

                                </div>



                                <div className="pt-6 border-t border-slate-800 flex justify-between items-center">

                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Case Study</span>

                                    <button 
                                        onClick={() => project.link && window.open(project.link, '_blank')}
                                        className="text-blue-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold"
                                    >
                                        View Details <ExternalLink size={14} />
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};



export default HomeProjects;

