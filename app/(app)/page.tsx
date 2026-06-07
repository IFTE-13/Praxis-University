import Admissions from "@/components/guest/home/Admission";
import Hero from "@/components/guest/home/Hero";
import MSGVC from "@/components/guest/home/MSGVC";
import Programs from "@/components/guest/home/Programs";
import QuickLinks from "@/components/guest/home/QuickLinks";

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