// In your project, save this as: app/services/page.tsx
'use client';

import React, { FC } from 'react';
import { servicesList } from '../../lib/data'; // Correct relative path
import { Icons } from '../../components/icons'; // Correct relative path
import { Service } from '../../lib/types'; // Correct relative path

const ServicesPage: FC = () => {
    return (
        <div className="bg-slate-900 text-white min-h-screen p-4 sm:p-8 flex items-center">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                     <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Services I Offer</h1>
                     <p className="mt-4 text-lg text-slate-400">Bringing your ideas to life with a wide range of technical skills.</p>
                </header>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesList.map((service: Service) => (
                        <div key={service.title} className="bg-slate-800 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform hover:bg-slate-700/50 border border-slate-700">
                            <div className="text-indigo-400 w-12 h-12 mx-auto mb-6">
                                {Icons[service.iconName]}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-slate-400 text-sm">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
