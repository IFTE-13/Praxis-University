import CardGrid from "./CardGrid";


const admissionCards = [
  {
    title: "Undergraduate",
    description: "Explore our diverse undergraduate programs and start your academic journey.",
    buttonText: "Learn More",
    buttonLink: "/undergraduate"
  },
  {
    title: "Graduate",
    description: "Advance your career with our cutting-edge graduate and professional programs.",
    buttonText: "Discover Programs",
    buttonLink: "/graduate"
  },
  {
    title: "Financial Aid",
    description: "Learn about scholarships, grants, and other financial aid opportunities.",
    buttonText: "Explore Options",
    buttonLink: "/financial-aid"
  }
];

export default function Community() {
  return (
    <CardGrid 
      title="Join Our Community" 
      cards={admissionCards}
    />
  );
}