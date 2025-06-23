export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'Our Approach', path: '/#our-approach' },
  { name: 'About', path: '/#about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/#contact' },
];

export const socialLinks = [
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/company/githaf-consulting' },
  { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/githafconsulting' },
  { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/githafconsulting' },
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
