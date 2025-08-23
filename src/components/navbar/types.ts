
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'Our Approach', path: '/#approach' },
  { name: 'Use Cases', path: '/use-cases' },
  { name: 'About', path: '/#about' },
  { name: 'Contact', path: '/#contact' },
  { name: 'Blog', path: '/blog' },
];

export const socialLinks = [
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/company/githaf-consulting' },
];

export interface NavLink {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}
