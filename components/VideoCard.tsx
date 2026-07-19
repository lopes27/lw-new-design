"use client";

import { useEffect, useRef } from "react";

type VideoCardProps = {
  src: string;
  label: string;
};

/**
 * Vidéo en boucle qui se lance uniquement lorsqu'elle est visible
 * à l'écran (économie de batterie et de données sur mobile),
 * avec un léger zoom au survol.
 */
export default function VideoCard({ src, label }: VideoCardProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    >
      Votre navigateur ne prend pas en charge la lecture vidéo.
    </video>
  );
}
