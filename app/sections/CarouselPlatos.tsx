"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { carouselImageAlts } from "../lib/seo";

const images = [
  "/images/carousel/1.jpeg",
  "/images/carousel/2.jpeg",
  "/images/carousel/3.jpeg",
  "/images/carousel/4.jpeg",
  "/images/carousel/5.jpeg",
  "/images/carousel/6.jpeg",
  "/images/carousel/7.jpeg",
  "/images/carousel/8.jpeg",
  "/images/carousel/9.jpeg",
  "/images/carousel/10.jpeg",
  "/images/carousel/11.jpeg",
  "/images/carousel/12.jpeg",
  "/images/carousel/13.jpeg",
  "/images/carousel/14.jpeg",
  "/images/carousel/15.jpeg",
  "/images/carousel/16.jpeg",
  "/images/carousel/17.jpeg",
];

const TOTAL = images.length;
const SNAP_TRANSITION =
  "transform 550ms cubic-bezier(0.32, 0.72, 0, 1), opacity 550ms cubic-bezier(0.32, 0.72, 0, 1), box-shadow 550ms cubic-bezier(0.32, 0.72, 0, 1)";

const ACTIVE_SHADOW =
  "0 2px 6px rgba(60, 40, 20, 0.10), 0 12px 28px rgba(60, 40, 20, 0.16), 0 28px 64px rgba(60, 40, 20, 0.14)";
const NEIGHBOR_SHADOW = "0 4px 16px rgba(60, 40, 20, 0.08)";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

function interpolateDepth(absDist: number) {
  const scale =
    absDist <= 1 ? 1 - absDist * 0.14 : absDist <= 2 ? 0.86 - (absDist - 1) * 0.14 : 0.72;
  const opacity =
    absDist <= 1 ? 1 - absDist * 0.45 : absDist <= 2 ? 0.55 - (absDist - 1) * 0.25 : 0.3;
  const boxShadow =
    absDist < 0.1
      ? ACTIVE_SHADOW
      : absDist < 1.5
        ? NEIGHBOR_SHADOW
        : "none";

  return { scale, opacity, boxShadow };
}

function reducedMotionDepth(absDist: number) {
  const opacity = absDist < 0.5 ? 1 : 0.4;
  return {
    scale: 1,
    opacity,
    boxShadow: absDist < 0.5 ? ACTIVE_SHADOW : "none",
  };
}

export default function CarouselPlatos() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [liveMessage, setLiveMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const slideInnerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const regionRef = useRef<HTMLElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    dragFree: false,
  });

  const tweenSlides = useCallback(
    (api: EmblaCarouselType, eventName?: string) => {
      const engine = api.internalEngine();
      const scrollProgress = api.scrollProgress();
      const snaps = api.scrollSnapList();
      const snapSpacing = snaps.length > 1 ? snaps[1] - snaps[0] : 1;
      const slidesInView = api.slidesInView();
      const isScrollEvent = eventName === "scroll";
      const transition = isDragging ? "none" : SNAP_TRANSITION;

      snaps.forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();
              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);
                if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
                if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            });
          }

          const absDist = Math.abs(diffToTarget) / snapSpacing;
          const depth = prefersReducedMotion
            ? reducedMotionDepth(absDist)
            : interpolateDepth(absDist);

          const node = slideInnerRefs.current[slideIndex];
          if (!node) return;

          node.style.transform = `scale(${depth.scale})`;
          node.style.opacity = String(depth.opacity);
          node.style.filter = "none";
          node.style.boxShadow = depth.boxShadow;
          node.style.transition = transition;
          node.style.willChange = isDragging ? "transform, opacity" : "auto";
        });
      });
    },
    [isDragging, prefersReducedMotion]
  );

  const onSelect = useCallback(
    (api: EmblaCarouselType) => {
      const index = api.selectedScrollSnap();
      setSelectedIndex(index);
      setLiveMessage(`Imagen ${index + 1} de ${TOTAL}`);
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    tweenSlides(emblaApi);
    onSelect(emblaApi);

    const onScroll = () => tweenSlides(emblaApi, "scroll");
    const onReInit = () => tweenSlides(emblaApi);
    const onPointerDown = () => setIsDragging(true);
    const onPointerUp = () => {
      setIsDragging(false);
      tweenSlides(emblaApi);
    };
    const onSettle = () => {
      setIsDragging(false);
      tweenSlides(emblaApi);
    };

    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onReInit);
    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);
    emblaApi.on("settle", onSettle);

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onReInit);
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
      emblaApi.off("settle", onSettle);
    };
  }, [emblaApi, tweenSlides, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  const formatIndex = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      ref={regionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Galería de momentos y platos en la Bodega"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="group relative bg-beige py-20 px-4 font-poppins text-darkgreen cursor-grab active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-darkgreen/40 focus-visible:ring-offset-2 focus-visible:ring-offset-beige rounded-sm"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2
          className="text-3xl font-semibold tracking-[-0.02em] mb-10 md:mb-12 text-darkgreen font-theSeasons text-center"
        >
          Platos y momentos en La Dalmacia, Miraflores
        </h2>

        <div className="relative w-full">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Imagen anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 flex items-center justify-center min-w-11 min-h-11 rounded-full border border-darkgreen/20 bg-beige/60 backdrop-blur-md text-darkgreen opacity-0 group-hover:opacity-100 [@media(pointer:coarse)]:opacity-20 transition-opacity duration-200 active:scale-95 focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-darkgreen/40"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            className="overflow-hidden"
            ref={emblaRef}
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)",
            }}
          >
            <div className="flex items-center touch-pan-y">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="flex-[0_0_auto] min-w-0 pl-3 sm:pl-5"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Imagen ${i + 1} de ${TOTAL}`}
                  aria-hidden={Math.abs(i - selectedIndex) > 2}
                >
                  <div
                    ref={(el) => {
                      slideInnerRefs.current[i] = el;
                    }}
                    className="rounded-[20px] bg-[#f3ebc8] origin-center"
                    style={{ transformOrigin: "center center" }}
                  >
                    <div className="relative w-[220px] h-[280px] sm:w-[320px] sm:h-[420px] overflow-hidden rounded-[20px]">
                      <Image
                        src={src}
                        alt={
                          carouselImageAlts[i] ??
                          `Plato peruano en Bodega Dalmacia, Miraflores`
                        }
                        fill
                        className="object-cover"
                        draggable={false}
                        sizes="(max-width: 640px) 220px, 320px"
                        priority={i === selectedIndex}
                        loading={i === selectedIndex ? undefined : "lazy"}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Imagen siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 flex items-center justify-center min-w-11 min-h-11 rounded-full border border-darkgreen/20 bg-beige/60 backdrop-blur-md text-darkgreen opacity-0 group-hover:opacity-100 [@media(pointer:coarse)]:opacity-20 transition-opacity duration-200 active:scale-95 focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-darkgreen/40"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Counter + progress rail */}
        <div className="flex items-center gap-4 mt-8">
          <span
            className="text-sm tabular-nums text-darkgreen/50 select-none"
            aria-hidden="true"
          >
            {formatIndex(selectedIndex + 1)} / {formatIndex(TOTAL)}
          </span>

          <div
            className="relative w-36 h-0.5 rounded-full bg-darkgreen/15"
            role="group"
            aria-label="Posición en la galería"
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-darkgreen/40 transition-[width] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{ width: `${((selectedIndex + 1) / TOTAL) * 100}%` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir a imagen ${i + 1}`}
                  aria-current={i === selectedIndex ? "true" : undefined}
                  className="flex-1 h-4 -mt-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-darkgreen/40 rounded-sm"
                />
              ))}
            </div>
          </div>
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {liveMessage}
        </p>
      </div>
    </section>
  );
}
