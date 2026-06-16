export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  projectType: string;
  rating: number;
  comment: string;
  initials: string;
  isDemo?: boolean;
}
