import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showIcon?: boolean;
}

export function Logo({
  variant = 'default',
  size = 'md',
  className,
  showIcon = true,
}: LogoProps) {
  const sizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const iconSize = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  };

  const dotColor = variant === 'white' ? 'bg-white' : 'bg-purple-600';
  const textColor =
    variant === 'white'
      ? 'text-white'
      : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent';

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {showIcon && (
        <div className={`grid grid-cols-2 gap-1 ${iconSize[size]}`}>
          <span className={`block w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
          <span className={`block w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
          <span className={`block w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
          <span className={`block w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
        </div>
      )}
      <div
        className={cn(
          'font-extrabold tracking-wide uppercase',
          sizeClasses[size],
          textColor
        )}
      >
        DICE SOLUTIONS
      </div>
    </div>
  );
}
