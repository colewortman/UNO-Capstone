'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../../index.css';
import Image from "next/image";
import { StaticImageData } from 'next/image';
import barIq from "../../../public/bar-iq.gif"
import competitor1 from "../../../public/competitor-1.png"
import competitor2 from "../../../public/competitor-2.png"
import competitor3 from "../../../public/competitor-3.png"

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  imageUrl: StaticImageData;
}

const slides: SlideData[] = [
  {
    title: 'Bar IQ',
    subtitle: 'The new era.',
    description:
      'A smarter, faster way to run inventory — designed specifically for high-volume bars that need accuracy without the time drain.',
    accent: '#4DA3FF',
    imageUrl: barIq,
  },
  {
    title: 'Competitor1',
    subtitle: 'Legacy System',
    description:
      'Manual workflows and outdated tools slow down operations and introduce costly human error into inventory tracking.',
    accent: '#6B7280',
    imageUrl: competitor1,
  },
  {
    title: 'Competitor2',
    subtitle: 'Spreadsheet-Based',
    description:
      'Heavy reliance on spreadsheets leads to fragmented data, inconsistent reporting, and time-consuming reconciliation.',
    accent: '#6B7280',
    imageUrl: competitor2,
  },
  {
    title: 'Competitor3',
    subtitle: 'Manual Counting',
    description:
      'Traditional counting methods require hours of labor and still fail to provide real-time visibility into stock levels.',
    accent: '#6B7280',
    imageUrl: competitor3,
  },
];

export default function ElegantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [lightPosition, setLightPosition] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const SLIDE_DURATION = 6000;

  const frame = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);


  const handleMouseMove = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (frame.current) cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();

      const x = (mouseX - rect.left) / rect.width;
      const y = (mouseY - rect.top) / rect.height;

      setLightPosition({
        x: x * 100,
        y: y * 100,
      });

      setTilt({
        x: (y - 0.5) * 10,
        y: (x - 0.5) * -10,
      });
    });
  };



  const handleMouseLeave = () => {
    if (frame.current) cancelAnimationFrame(frame.current);
    setTilt({ x: 0, y: 0 });
  };

  const goToSlide = useCallback(
    (index: number, dir?: 'next' | 'prev') => {
      if (index === currentIndex) return;

      setDirection(dir || (index > currentIndex ? 'next' : 'prev'));
      setProgress(0);

      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex, 'next');
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex, 'prev');
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (!isInView || isMobile) return;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    intervalRef.current = setInterval(() => {
      goNext();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isInView, isMobile, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      ref={wrapperRef}
      className="carousel-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background accent wash */}
      <div
        className="carousel-bg-wash"
        style={{
          background: `radial-gradient(circle at ${lightPosition.x}% ${lightPosition.y}%, ${currentSlide.accent}25 0%, transparent 60%)`,
        }}
      />

      <div className="carousel-inner">
        {/* Left: Text Content */}
        <div className="carousel-content">
          <div className="carousel-content-inner">
            {/* Collection number */}
            <div
              className={`carousel-collection-num visible`}
            >
              <span className="carousel-num-line" />
              <span className="carousel-num-text">
                {currentIndex === 0 && 'The Bar IQ Method'}
                {currentIndex === 1 && 'Competitor 1'}
                {currentIndex === 2 && 'Competitor 2'}
                {currentIndex === 3 && 'Competitor 3'}
              </span>
            </div>

            {/* Title */}
            <h2
              className="carousel-title visible"
            >
              {currentSlide.title}
            </h2>

            {/* Subtitle */}
            <p
              className={`carousel-subtitle visible`}
              style={{ color: currentSlide.accent }}
            >
              {currentSlide.subtitle}
            </p>

            {/* Description */}
            <p
              className={`carousel-description visible`}
            >
              {currentSlide.description}
            </p>

            {/* Navigation Arrows */}
            <div className="carousel-nav-arrows">
              <button
                onClick={goPrev}
                className="carousel-arrow-btn"
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="carousel-arrow-btn"
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Image + Progress */}
        <div className="carousel-right">
          <div className="carousel-image-container">
            <div
              className={`carousel-image-frame visible`}
              style={{
                transform: `
                  perspective(1200px)
                  rotateX(${tilt.x}deg)
                  rotateY(${tilt.y}deg)
                  scale(1)
                `,
                '--mouse-x': `${lightPosition.x}%`,
                '--mouse-y': `${lightPosition.y}%`
              } as React.CSSProperties}
            >

              {slides.map((slide, index) => (
                <Image
                  key={index}
                  src={slide.imageUrl}
                  alt={slide.title}
                  fill
                  priority={index === currentIndex}
                  className={`carousel-image ${
                    index === currentIndex ? 'active' : ''
                  }`}
                />
              ))}
              <div
                className="carousel-image-overlay"
                style={{
                  background: direction === 'next'
                  ? `linear-gradient(135deg, ${currentSlide.accent}22 0%, transparent 50%)`
                  : `linear-gradient(-135deg, ${currentSlide.accent}22 0%, transparent 50%)`,
                }}
              />
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="carousel-progress-bar">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`carousel-progress-item ${
                  index === currentIndex ? 'active' : ''
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="carousel-progress-track">
                  <div
                    className="carousel-progress-fill"
                    style={{
                      width:
                        index === currentIndex
                          ? `${progress}%`
                          : index < currentIndex
                          ? '100%'
                          : '0%',
                      backgroundColor:
                        index === currentIndex ? currentSlide.accent : undefined,
                    }}
                  />
                </div>

                <span className="carousel-progress-label">
                  {index === 0 && 'Bar IQ'}
                  {index === 1 && 'Competitor 1'}
                  {index === 2 && 'Competitor 2'}
                  {index === 3 && 'Competitor 3'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}