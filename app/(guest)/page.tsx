import Admissions from "./_components/Admission";
import Hero from "./_components/Hero";
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
      <Admissions />
    </>
  );
}