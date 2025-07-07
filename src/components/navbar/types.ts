
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'Our Approach', path: '/#our-approach' },
  { name: 'About', path: '/#about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/#contact' },
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
