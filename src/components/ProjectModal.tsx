// In your project, save this as: components/ProjectModal.tsx
'use client';

import React, { useState, useCallback, useEffect, FC } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { Project } from '../lib/types'; // Using relative path
import { Icons } from '@/components/icons'; // Using relative path

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = useCallback(() => {
        if (!project) return;
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, [project]);

    const prevImage = () => {
        if (!project) return;
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    };

    // Effect for auto-cycling images
    useEffect(() => {
       if (!project) return;
       const timer = setTimeout(nextImage, 4000);
       return () => clearTimeout(timer);
    }, [currentImageIndex, nextImage, project]);

    // Effect for closing modal with Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!project) return null;

    return (
        // Modal backdrop with fade-in animation
        <div 
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" 
            onClick={onClose}
        >
            {/* Modal content container with scale-in animation */}
            <div 
                className="bg-slate-800 rounded-lg shadow-xl max-w-3xl w-full mx-auto overflow-hidden border border-slate-700" 
                onClick={e => e.stopPropagation()}
                style={{ animation: 'scaleIn 0.3s ease-out forwards' }}
            >
                {/* Image carousel container */}
                <div className="relative w-full h-64 md:h-96">
                    {project.images.map((src, index) => (
                        <Image 
                            key={index}
                            src={src}
                            alt={`${project.title} screenshot ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className={`transition-opacity duration-700 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                            priority={index === 0} // Prioritize loading the first image
                        />
                    ))}
                    {/* Carousel navigation buttons */}
                    {project.images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors">{Icons.chevronLeft}</button>
                            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors">{Icons.chevronRight}</button>
                        </>
                    )}
                </div>
                {/* Text content area */}
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                    <p className="text-indigo-400 font-semibold mt-2">{project.category}</p>
                    <p className="text-slate-300 mt-4 leading-relaxed">{project.description}</p>
                    {/* Tech stack used in the project */}
                    <div className="mt-5">
                        <h4 className="font-semibold text-slate-200 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => <span key={t} className="bg-slate-700 text-xs font-medium px-2 py-1 rounded">{t}</span>)}
                        </div>
                    </div>
                    {/* Action buttons */}
                    <div className="mt-6 flex justify-end">
                        <button onClick={onClose} className="px-5 py-2 bg-slate-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-500 transition-colors">Close</button>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                @keyframes scaleIn {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default ProjectModal;
