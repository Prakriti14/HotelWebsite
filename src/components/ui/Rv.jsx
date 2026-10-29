import { useEffect, useRef, useState } from "react";

export default function Rv({ children, d = 0, className = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          o.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${d}ms` }} className={`rv ${on ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}