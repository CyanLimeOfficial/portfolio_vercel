// In your project, save this as: app/resume/page.tsx
'use client';

import React, { FC } from 'react';

const ResumePage: FC = () => (
    <div className="bg-slate-900 text-white min-h-screen p-4 sm:p-8">
        <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12 pt-16">
                 <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">My Resume</h1>
                 <p className="mt-4 text-lg text-slate-400">A summary of my academic and professional journey.</p>
            </header>
            
            <div className="text-center mb-10">
                <a 
                    href="/resume-james-lanzarrote.pdf" // IMPORTANT: Place your resume PDF in the /public folder and update this path
                    download
                    className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition-transform transform hover:scale-105"
                >
                    Download Full Resume (PDF)
                </a>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg shadow-lg space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-indigo-400 border-b-2 border-slate-700 pb-2 mb-4">Educational Background</h2>
                    <div>
                        <p className="text-xl font-semibold text-white">Bachelor of Science in Information Technology</p>
                        <p className="text-slate-300">Naval State University, Naval, Biliran</p>
                        <p className="text-slate-400 text-sm">2020 - 2024</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-indigo-400 border-b-2 border-slate-700 pb-2 mb-4">Work Experience</h2>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white">Full Stack Developer (Freelance)</h3>
                        <p className="text-slate-300">Remote | 2023 - Present</p>
                        <ul className="list-disc list-inside mt-3 text-slate-400 space-y-1">
                            <li>Developed and maintained full-stack web applications for various clients using React, Next.js, and Node.js.</li>
                            <li>Collaborated with designers and stakeholders to translate complex requirements into user-friendly interfaces.</li>
                            <li>Managed database schemas, server-side logic, and API integrations for seamless functionality.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white">IT Intern</h3>
                        <p className="text-slate-300">Local Tech Solutions | Summer 2022</p>
                        <ul className="list-disc list-inside mt-3 text-slate-400 space-y-1">
                            <li>Assisted senior developers with coding, debugging, and testing tasks on an e-commerce platform.</li>
                            <li>Provided technical support to staff, resolving hardware and software issues efficiently.</li>
                            <li>Contributed to the development of an internal inventory management tool.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </div>
);

export default ResumePage;
