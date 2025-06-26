// In your project, save this as: lib/types.ts
import { Icons } from "@/components/icons"; // Assuming Icons are in components/Icons.tsx

// A type to define the valid page names for navigation.
export type PageName = 'Home' | 'Tech Stack' | 'Projects' | 'Services' | 'Testimonials' | 'Resume';

// A type for the different project categories for filtering.
export type ProjectCategory = 'Full Stack' | 'Web' | 'Mobile' | 'Desktop' | 'Miscellaneous';

// Interface defining the structure for a single project.
export interface Project {
    id: number;
    title: string;
    subtitle: string;
    category: ProjectCategory;
    images: string[];
    description: string;
    tech: string[];
}

// Interface for client testimonials.
export interface Testimonial {
    name: string;
    title: string;
    image: string;
    testimonial: string;
}

// Interface for the services you offer.
export interface Service {
    title: string;
    desc: string;
    // FIX: Use keyof typeof to ensure the iconName is a valid key from the Icons object.
    iconName: keyof typeof Icons;
}

// A generic type for technology and tool listings.
export interface TechData {
    [key: string]: string[];
}
