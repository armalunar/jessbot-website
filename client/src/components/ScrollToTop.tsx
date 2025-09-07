import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full kawaii-shadow transition-all duration-300 hover:scale-110 animate-bounce-slow"
      data-testid="button-scroll-to-top"
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up text-lg"></i>
    </button>
  );
}