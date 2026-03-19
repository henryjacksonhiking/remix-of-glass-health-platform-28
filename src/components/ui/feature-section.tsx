import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  // Preload all images and measure max height
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    const recalculate = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      let maxH = 0;
      images.forEach((img) => {
        if (img.naturalWidth > 0) {
          const h = (containerWidth / img.naturalWidth) * img.naturalHeight;
          if (h > maxH) maxH = h;
        }
      });
      if (maxH > 0) setContainerHeight(maxH);
    };

    features.forEach((feature) => {
      const img = new Image();
      img.src = feature.image;
      img.onload = () => {
        loaded++;
        if (loaded === features.length) recalculate();
      };
      images.push(img);
    });

    const onResize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      let maxH = 0;
      images.forEach((img) => {
        if (img.naturalWidth > 0) {
          const h = (containerWidth / img.naturalWidth) * img.naturalHeight;
          if (h > maxH) maxH = h;
        }
      });
      if (maxH > 0) setContainerHeight(maxH);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [features]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="section-headline text-foreground text-center mb-12">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-6 cursor-pointer"
                onClick={() => {
                  setCurrentFeature(index);
                  setProgress(0);
                }}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center border-2 shrink-0",
                    index <= currentFeature
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-muted-foreground/30"
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-sm font-bold">✓</span>
                  ) : (
                    <span className="text-sm text-muted-foreground">{index + 1}</span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3
                    className={cn(
                      "text-lg font-medium",
                      index === currentFeature ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {feature.title || feature.step}
                  </h3>

                  <p
                    className={cn(
                      "text-sm leading-relaxed",
                      index === currentFeature ? "text-muted-foreground" : "text-muted-foreground/60"
                    )}
                  >
                    {feature.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={containerRef}
            className="order-1 md:order-2 relative overflow-hidden rounded-xl"
            style={containerHeight ? { height: containerHeight } : undefined}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className={containerHeight ? "absolute inset-0 flex items-center justify-center" : ""}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title || feature.step}
                        className="w-full h-auto rounded-xl"
                      />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
