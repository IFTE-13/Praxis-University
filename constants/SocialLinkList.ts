import { Facebook, Instagram, Twitter, Github, Linkedin } from 'lucide-react';

export type SocialLink = {
  href: string;
  icon: typeof Facebook;
  label: string;
};

export const socialLinks: SocialLink[] = [
  {
    href: '#',
    icon: Facebook,
    label: 'Facebook',
  },
  {
    href: '#',
    icon: Instagram,
    label: 'Instagram',
  },
  {
    href: '#',
    icon: Twitter,
    label: 'Twitter',
  },
  {
    href: '#',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: '#',
    icon: Linkedin,
    label: 'Linkedin',
  },
];
