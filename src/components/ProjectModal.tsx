// In your project, save this as: components/ProjectModal.tsx
'use client';

import React, { useState, useCallback, useEffect, FC } from 'react';
import { Project } from '@/lib/types';
import { Icons } from '@/components/icons';

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
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4" onClick={onClose}>
            <div className="bg-slate-800 rounded-lg shadow-xl max-w-3xl w-full mx-auto overflow-hidden animate-fade-in" onClick={e => e.stopPropagation()}>
                <div className="relative">
                    <img 
                        src={project.images[currentImageIndex]} 
                        alt={project.title} 
                        className="w-full h-64 md:h-96 object-cover" 
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/1e293b/ffffff?text=Image+Error'; }}
                    />
                    {project.images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">{Icons.chevronLeft}</button>
                            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">{Icons.chevronRight}</button>
                        </>
                    )}
                </div>
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                    <p className="text-indigo-400 font-semibold mt-2">{project.category}</p>
                    <p className="text-slate-300 mt-4">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map(t => <span key={t} className="bg-slate-700 text-xs font-medium px-2 py-1 rounded">{t}</span>)}
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button onClick={onClose} className="px-4 py-2 bg-slate-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-500">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
