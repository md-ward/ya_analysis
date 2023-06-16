import { useEffect } from "react";

const useIntersectionObserverAnimation = (ref, animateClass) => {
  useEffect(() => {
    const target = ref.current;


    const handleAnimationEnd = () => {
      target.classList.remove(animateClass);
      target.removeEventListener("animationend", handleAnimationEnd);
    };

    const handleIntersection = (entries, observer) => {
      if (entries[0].isIntersecting) {
        target.classList.add(animateClass);
        target.addEventListener("animationend", handleAnimationEnd);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    observer.observe(target);

    return () => {
      observer.unobserve(target);
      target.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [ref, animateClass]);
};

export default useIntersectionObserverAnimation;