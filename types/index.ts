export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  duration: string;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT";
  price: number;
  instructor: string;
  category: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  published: boolean;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  createdAt: Date;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  deliverables: string[];
  process: string[];
  timeline: string;
  price: string;
  icon: string;
  featured: boolean;
}

export interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  date: Date;
  time: string;
  status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
  notes: string;
  amount: number;
  createdAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  url?: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
