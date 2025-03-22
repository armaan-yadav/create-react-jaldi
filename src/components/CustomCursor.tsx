import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [interactiveHovered, setInteractiveHovered] = useState(false);
  const [headingHovered, setHeadingHovered] = useState(false);

  const animationRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const lastPositionRef = useRef({ x: 0, y: 0 });

  const lerp = (start: number, end: number, factor: number): number =>
    start * (1 - factor) + end * factor;

  useEffect(() => {
    const updateCursorPosition = () => {
      // Enhanced smooth movement with adjusted lerp factor
      targetRef.current.x = lerp(targetRef.current.x, position.x, 0.12); // Smoother factor
      targetRef.current.y = lerp(targetRef.current.y, position.y, 0.12);
    };

    // Initialize cursor position
    targetRef.current = { ...position };
    lastPositionRef.current = { ...position };

    // Start animation
    animationRef.current = requestAnimationFrame(updateCursorPosition);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [position]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    const setupInteractiveElements = () => {
      const interactiveElements =
        document.querySelectorAll<HTMLElement>("a, .interactive");

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setInteractiveHovered(true));
        el.addEventListener("mouseleave", () => setInteractiveHovered(false));
      });

      const headingElements = document.querySelectorAll<HTMLElement>(
        "h1, h2, h3, h4, h5, h6, .heading"
      );

      headingElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setHeadingHovered(true));
        el.addEventListener("mouseleave", () => setHeadingHovered(false));
      });
    };

    const observeDOM = () => {
      const observer = new MutationObserver(() => {
        setupInteractiveElements();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      return observer;
    };

    setupInteractiveElements();
    const observer = observeDOM();

    // Clean up
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  // Determine cursor appearance based on context
  const isExpanded = interactiveHovered || headingHovered; // Added buttonHovered to isExpanded
  const cursorSize = isExpanded ? 60 : 30;
  const innerSize = isExpanded ? 6 : 2;
  const transparent = interactiveHovered; // Removed buttonHovered from transparent

  return (
    <>
      {/* Main cursor elements */}
      <div
        className={`custom-cursor-outer ${
          hidden ? "opacity-0" : "opacity-100"
        } ${clicked ? "cursor-clicked" : ""} ${
          transparent ? "cursor-transparent" : ""
        } ${isExpanded ? "cursor-expanded" : ""}`}
        style={{
          left: `${targetRef.current.x}px`,
          top: `${targetRef.current.y}px`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
        }}
      />

      {/* Inner cursor dot */}
      <div
        className={`custom-cursor-inner ${
          hidden ? "opacity-0" : "opacity-100"
        } ${transparent ? "cursor-transparent" : ""}`}
        style={{
          left: `${targetRef.current.x}px`,
          top: `${targetRef.current.y}px`,
          width: `${innerSize}px`,
          height: `${innerSize}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
