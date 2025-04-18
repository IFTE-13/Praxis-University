"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { universityName } from "@/constants/app";
import Link from "next/link";

const images = [
  "https://images.unsplash.com/20/cambridge.JPG?w=1500",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1500",
  "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1500",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1500",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1500"
];

export default function Hero() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    updateCarouselState();
    carouselApi.on("select", updateCarouselState);

    const autoplayInterval = setInterval(() => {
      carouselApi.scrollNext();
    }, 10000);

    return () => {
      carouselApi.off("select", updateCarouselState);
      clearInterval(autoplayInterval);
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  return (
    <div className="relative h-[90vh] w-full">
      <Carousel
        setApi={setCarouselApi}
        opts={{ loop: true }}
        className="w-full h-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div 
                className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 z-20">
        <div className="container mx-auto h-full flex flex-col items-center justify-center text-center text-white px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {universityName}
          </h1>
          <p className="mt-3 max-w-3xl text-lg leading-8">
            Empowering students to reach their full potential through a well-rounded education and supportive community.
          </p>
          <Button className="border mt-6">
            <Link href="/about" prefetch={false}>
              Learn More
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-between px-3 pointer-events-none">
        <Button
          onClick={() => scrollToIndex(currentIndex - 1)}
          className="pointer-events-auto rounded-full w-12 h-12 md:w-32 md:h-32 p-0 bg-transparent hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="size-8 md:size-32 text-white" strokeWidth={0.5} />
        </Button>
        <Button
          onClick={() => scrollToIndex(currentIndex + 1)}
          className="pointer-events-auto rounded-full w-12 h-12 md:w-32 md:h-32 p-0 bg-transparent hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="size-8 md:size-32 text-white" strokeWidth={0.5} />
        </Button>
      </div>
    </div>
  );
}