// In your project, save this as: app/testimonials/page.tsx
'use client';

import React, { useState, useCallback, useEffect, FC } from 'react';
import Image from 'next/image';
import { testimonialsData } from '@/lib/data';
import { Icons } from '@/components/icons';

const TestimonialsPage: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, []);

    useEffect(() => {
       const timer = setInterval(nextTestimonial, 7000);
       return () => clearInterval(timer);
    }, [nextTestimonial]);

    return (
        <div className="bg-slate-900 text-white min-h-screen p-4 sm:p-8 flex items-center">
            <div className="max-w-4xl mx-auto text-center w-full">
                <header className="mb-12 pt-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">What Clients Say</h1>
                    <p className="mt-4 text-lg text-slate-400">Feedback from people I&apos;ve worked with.</p>
                </header>
                <div className="relative">
                    <div className="bg-slate-800 p-8 rounded-lg shadow-lg min-h-[320px] flex flex-col justify-center overflow-hidden">
                       {testimonialsData.map((item, index) => (
                           <div key={index} className={`w-full h-full transition-opacity duration-700 ease-in-out absolute inset-0 flex flex-col items-center justify-center ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                                <Image src={item.image} alt={item.name} width={96} height={96} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-slate-600"/>
                                <p className="text-lg italic text-slate-300 max-w-2xl">&ldquo;{item.testimonial}&rdquo;</p>
                                <h4 className="font-bold text-white mt-6">{item.name}</h4>
                                <p className="text-sm text-slate-400">{item.title}</p>
                           </div>
                       ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsPage;
