// In your project, save this as: app/page.tsx
'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Next.js Image component
import { servicesList, technologies, projectsData } from '../lib/data';
import { Icons } from '@/components/icons';
import ProjectCarousel from '../components/ProjectCarousel';

const HomePage: FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center text-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 h-full w-full bg-slate-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="relative z-10">
                    <Image 
                        src="https://placehold.co/150x150/ffffff/1e293b?text=DL" 
                        alt="Dexter Lanzarrote" 
                        width={160}
                        height={160}
                        className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-slate-700 shadow-lg"
                    />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">Dexter Lanzarrote</h1>
                    <p className="mt-4 text-xl sm:text-2xl text-slate-300">Full Stack Developer</p>
                    <div className="mt-8">
                        <Link href="/projects" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition-transform transform hover:scale-105">
                            View My Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tech Stacks Preview */}
            <section className="py-20 px-4 bg-slate-800/50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white">Core Technologies</h2>
                    <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                        {[...technologies.Frontend.slice(0, 4), ...technologies.Backend.slice(0, 3)].map(tech => (
                            <span key={tech} className="bg-slate-700 text-slate-300 text-md font-medium px-4 py-2 rounded-full">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Carousel */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                    <p className="text-slate-400 max-w-3xl mx-auto my-4">A selection of my recent work.</p>
                    <ProjectCarousel projects={projectsData} />
                </div>
            </section>
            
            {/* Services Preview */}
            <section className="py-20 px-4 bg-slate-800/50">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white">Services</h2>
                    <p className="text-slate-400 max-w-3xl mx-auto my-4">Bringing ideas to life with a wide range of technical skills.</p>
                    <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
                        {servicesList.slice(0, 4).map(service => (
                            <div key={service.title} className="bg-slate-800 p-6 rounded-lg flex items-center gap-4">
                                <div className="text-indigo-400 w-10 h-10 flex-shrink-0">{Icons[service.iconName]}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                                    <p className="text-slate-400 text-sm">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
