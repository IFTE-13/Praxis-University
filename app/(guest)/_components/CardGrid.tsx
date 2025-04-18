import React from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export type CardInfo = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

interface CardGridProps {
  title?: string;
  cards: CardInfo[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

const CardGrid: React.FC<CardGridProps> = ({
  title,
  cards,
  className = '',
  columns = 3,
}) => {
  const getColumnsClass = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-3';
    }
  };

  return (
    <MaxWidthWrapper className={`py-12 ${className}`}>
      {title && <h2 className="text-3xl font-bold mb-12">{title}</h2>}
      <div className={`grid gap-8 ${getColumnsClass()}`}>
        {cards.map((card, idx) => (
            <Card key={idx} className="bg-card">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 h-20">{card.description}</p>
                <Button variant="outline" asChild>
                  <a href={card.buttonLink}>{card.buttonText}</a>
                </Button>
              </CardContent>
            </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default CardGrid;