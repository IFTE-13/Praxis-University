import { IItemType, ISocialType } from "./types";
import { Facebook, Instagram, Twitter, Github, Linkedin } from 'lucide-react';

export const items: IItemType[] = [
    {
      title: "academic",
      links: [
        { label: "academic calendar", href: "/academics/information/academic-calendar" },
        { label: "academic regulations", href: "/academics/information/academic-regulations" },
        { label: "faculty of arts and social science", href: "/academics/faculties/arts-and-social-science" },
        { label: "faculty of arts and business administration", href: "/academics/faculties/business-administration" },
        { label: "faculty of arts and engineering", href: "/academics/faculties/engineering" },
        { label: "faculty of arts and science and technology", href: "/academics/faculties/science-and-technology" },
      ],
    },
    {
      title: "praxis.",
      links: [
        { label: "future students", href: "/future-students" },
        { label: "on campus", href: "/on-campus" },
        { label: "admission", href: "/admission" },
        { label: "tution fees", href: "/tution-fees" },
        { label: "scholarships", href: "/scholarships" },
        { label: "apply now", href: "/apply-now" },
      ],
    },
    {
      title: "research",
      links: [
        { label: "AJBE", href: "/research/journals/ajbe" },
        { label: "AJSE", href: "/research/journals/ajse" },
        { label: "Past conferences", href: "/research/conferences/past" },
        { label: "upcoming conferences", href: "/research/conferences/upcoming" },
        { label: "collaborating institutes", href: "/research/collaborating-institutes" },
        { label: "innovations", href: "/research/innovations" },
      ],
    },
  ];

  export const links: ISocialType[] = [
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