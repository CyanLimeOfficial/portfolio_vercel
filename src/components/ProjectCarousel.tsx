// In your project, save this as: components/ProjectCarousel.tsx
'use client';

import React, { useState, useCallback, useEffect, FC } from 'react';
// FIX: The Project type should be imported from your types file, not the data file.
import { Project } from '../lib/types'; // Corrected relative path
import { Icons } from '@/components/icons'; // Corrected relative path

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

    const goToProject = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-cycle projects every 5 seconds
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
                {/* Image Display with Transition */}
                <div className="relative h-64 sm:h-80 md:h-96 w-full">
                    {projects.map((p, index) => (
                        <img 
                            key={p.id}
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} 
                            src={p.images[0]} 
                            alt={p.title} 
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/1e293b/ffffff?text=Image+Error'; }}
                        />
                    ))}
                </div>
                {/* Project Info */}
                <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-slate-400 mt-2">{project.subtitle}</p>
                </div>
            </div>
            
            {/* Navigation Arrows */}
            <button onClick={prevProject} className="absolute left-0 sm:-left-16 top-[45%] -translate-y-1/2 bg-slate-700 p-2 rounded-full hover:bg-slate-600 transition-colors text-white z-10">{Icons.chevronLeft}</button>
            <button onClick={nextProject} className="absolute right-0 sm:-right-16 top-[45%] -translate-y-1/2 bg-slate-700 p-2 rounded-full hover:bg-slate-600 transition-colors text-white z-10">{Icons.chevronRight}</button>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-4">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToProject(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-indigo-500' : 'bg-slate-600 hover:bg-slate-500'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ProjectCarousel;
