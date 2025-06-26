// In your project, save this as: components/layout/Footer.tsx
'use client';

import React from 'react';

export default function Footer() {
    return (
        <footer id="footer" className="bg-slate-800 text-slate-400 p-8 text-center border-t border-slate-700">
            <h3 className="text-xl font-bold text-white">Get In Touch</h3>
            <p className="mt-2">I&apos;m currently open to new opportunities. Feel free to reach out.</p>
            <div className="flex justify-center gap-6 my-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">GitHub</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
            </div>
            <p>
                <a href="mailto:jameslanzarrote@gmail.com" className="hover:text-indigo-400 transition-colors">
                    jameslanzarrote@gmail.com
                </a>
            </p>
            <p className="mt-6 text-sm text-slate-500">&copy; {new Date().getFullYear()} James Lanzarrote. All Rights Reserved.</p>
        </footer>
    );
}
