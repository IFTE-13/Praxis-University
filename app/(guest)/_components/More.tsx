import { universityName } from '@/constants/app';
import CardGrid from './CardGrid';

const newsCards = [
  {
    title: 'Latest News',
    description: `Stay up-to-date with the latest news and events from ${universityName}.`,
    buttonText: 'Read More',
    buttonLink: '#',
  },
  {
    title: 'Upcoming Events',
    description: `Check out the latest events and activities happening at ${universityName}.`,
    buttonText: 'Explore Events',
    buttonLink: '#',
  },
  {
    title: 'Student Achievements',
    description: 'Celebrate the outstanding achievements of our talented students.',
    buttonText: 'View Achievements',
    buttonLink: '#',
  },
];

export default function More() {
  return (
    <div className="bg-background py-16">
      <CardGrid 
        cards={newsCards}
        title="More from us"
      />
    </div>
  );
}