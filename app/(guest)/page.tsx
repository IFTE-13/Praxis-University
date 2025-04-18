import Community from "./_components/Community";
import Hero from "./_components/Hero";
import More from "./_components/More";
import MSGVC from "./_components/MSGVC";
import Programs from "./_components/Programs";
import QuickLinks from "./_components/QuickLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <Programs />
      <MSGVC />
      <Community />
      <More />
    </>
  );
}