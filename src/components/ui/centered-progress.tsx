import React from 'react';

interface CenteredProgressProps {
  value: number;
  className?: string;
}

export function CenteredProgress({ value, className = '' }: CenteredProgressProps) {
  const leftWidth = value / 2;
  const rightWidth = value / 2;

  return (
    <div className={`relative h-[1px] ${className}`}>
      <div
        className="absolute right-1/2 top-0 h-full rounded-l-sm bg-primary/60"
        style={{ width: `${leftWidth}%` }}
      />
      <div
        className="absolute left-1/2 top-0 h-full rounded-r-sm bg-primary/60"
        style={{ width: `${rightWidth}%` }}
      />
    </div>
  );
}
