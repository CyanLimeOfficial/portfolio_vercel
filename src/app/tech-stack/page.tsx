// In your project, save this as: app/tech-stack/page.tsx
'use client';

import React, { FC } from 'react';
import { technologies, tools } from '../../lib/data'; // Correct relative path
import { TechData } from '../../lib/types'; // Correct relative path

const SkillCard = ({ title, items }: { title: string; items: string[] }) => (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg h-full">
        <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {items.map(item => (
                <span key={item} className="bg-slate-700 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">{item}</span>
            ))}
        </div>
    </div>
);

const TechStackPage: FC = () => {
    return (
        <div className="bg-slate-900 text-white min-h-screen p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16 pt-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Tech Stack & Skills</h1>
                    <p className="mt-4 text-lg text-slate-400">The collection of technologies and tools I use to bring projects to life.</p>
                </header>
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8 text-indigo-400">Technologies</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <SkillCard title="Frontend" items={technologies.Frontend} />
                        <SkillCard title="Backend" items={technologies.Backend} />
                    </div>
                </section>
                <section>
                    <h2 className="text-3xl font-bold text-center mb-8 text-indigo-400">Tools & Software</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <SkillCard title="Development" items={tools.Development} />
                        <SkillCard title="Productivity & Design" items={tools['Productivity & Design']} />
                        <SkillCard title="Video Editing" items={tools['Video Editing']} />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TechStackPage;
