import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";

export default function HorizontalScroller({ children }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronRight size={20} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory px-2 py-4"
      >
        {React.Children.map(children, child => (
          <div className="snap-start">{child}</div>
        ))}
      </div>

    </div>
  );
}
