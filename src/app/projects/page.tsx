// In your project, save this as: app/projects/page.tsx
'use client';

import React, { useState, FC } from 'react';
// FIX: Corrected import syntax and path.
import { projectsData } from '@/lib/data';
import { Project, ProjectCategory } from '@/lib/types';
import ProjectModal from '@/components/ProjectModal';

const ProjectsPage: FC = () => {
    const [filter, setFilter] = useState<string>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const categories: ('All' | ProjectCategory)[] = ['All', 'Full Stack', 'Web', 'Mobile', 'Desktop', 'Miscellaneous'];
    const filteredProjects = projectsData.filter(p => filter === 'All' || p.category === filter);

    const ProjectCard = ({ project }: { project: Project }) => (
        <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg group transition-transform transform hover:-translate-y-2 cursor-pointer" onClick={() => setSelectedProject(project)}>
            <div className="relative">
                <img className="w-full h-48 object-cover" src={project.images[0]} alt={project.title} onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/1e293b/ffffff?text=Image+Error'; }}/>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-bold">View Details</p>
                </div>
            </div>
            <div className="p-6">
                {/* FIX: Corrected the stray character before the h3 tag. */}
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-slate-400 mt-2">{project.subtitle}</p>
            </div>
        </div>
    );
    
    return (
        <div className="bg-slate-900 text-white min-h-screen p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12 pt-16">
                      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">My Projects</h1>
                      <p className="mt-4 text-lg text-slate-400">A showcase of my work across different domains.</p>
                </header>
                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${filter === cat ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(p => <ProjectCard key={p.id} project={p} />)}
                </div>
            </div>
            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </div>
    );
};

export default ProjectsPage;
