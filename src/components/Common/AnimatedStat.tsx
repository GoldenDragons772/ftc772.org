"use client";

import { useEffect, useRef, useState } from "react";

const AnimatedStat = ({ value, className, style }: { value: string | number; className?: string; style?: React.CSSProperties }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  const stringValue = String(value);
  const numericString = stringValue.replace(/o/gi, '0').replace(/k/gi, '').replace(/[^0-9.]/g, '');
  const target = parseFloat(numericString) || 0;
  
  const hasPlus = stringValue.includes('+');
  const usesO = stringValue.toLowerCase().includes('o');
  const usesK = stringValue.toLowerCase().includes('k');
  const isFloat = numericString.includes('.');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (statRef.current) {
      observer.observe(statRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const duration = 2000; 

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(target * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  let displayValue = isFloat ? count.toFixed(1) : Math.floor(count).toLocaleString();
  if (usesK) {
    displayValue += 'k';
  }
  if (usesO) {
    displayValue = displayValue.replace(/0/g, 'o');
  }
  if (hasPlus) {
    displayValue += '+';
  }

  const finalDisplay = count === target ? stringValue : displayValue;

  return (
    <div ref={statRef} className={className} style={style}>
      {finalDisplay}
    </div>
  );
};

export default AnimatedStat;
