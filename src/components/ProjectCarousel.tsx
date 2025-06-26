// In your project, save this as: components/ProjectCarousel.tsx
'use client';

import React, { useState, useCallback, useEffect, FC } from 'react';
import Image from 'next/image';
import { Project } from '../lib/types';
import { Icons } from '@/components/icons';

interface ProjectCarouselProps {
    projects: Project[];
}

const ProjectCarousel: FC<ProjectCarouselProps> = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % projects.length);
    }, [projects.length]);

    const prevProject = () => {
        setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
    };

    useEffect(() => {
        const timer = setInterval(nextProject, 5000);
        return () => clearInterval(timer);
    }, [nextProject]);

    if (!projects || projects.length === 0) {
        return <div className="text-slate-400">No projects to display.</div>;
    }

    const project = projects[currentIndex];

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-lg overflow-hidden shadow-xl mb-4">
                <div className="relative h-64 sm:h-80 md:h-96 w-full">
                    {projects.map((p, index) => (
                        <Image 
                            key={p.id}
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} 
                            src={p.images[0]} 
                            alt={p.title}
                            layout="fill"
                        />
                    ))}
                </div>
                <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-slate-400 mt-2">{project.subtitle}</p>
                </div>
            </div>
            
            <button onClick={prevProject} className="absolute left-0 sm:-left-16 top-[45%] -translate-y-1/2 bg-slate-700 p-2 rounded-full hover:bg-slate-600 text-white z-10">{Icons.chevronLeft}</button>
            <button onClick={nextProject} className="absolute right-0 sm:-right-16 top-[45%] -translate-y-1/2 bg-slate-700 p-2 rounded-full hover:bg-slate-600 text-white z-10">{Icons.chevronRight}</button>
        </div>
    );
};

export default ProjectCarousel;
