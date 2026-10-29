import { useEffect, useRef, useState } from "react";
import Rv from "./Rv";

export default function Counter({ to, label, d }) {
  const ref = useRef(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        o.disconnect();
        let s = 0;
        const t = setInterval(() => {
          s += to / 50;
          if (s >= to) {
            s = to;
            clearInterval(t);
          }
          setV(Math.round(s));
        }, 30);
      },
      { threshold: 0.5 }
    );
    o.observe(ref.current);
    return () => o.disconnect();
  }, [to]);
  return (
    <Rv d={d}>
      <div ref={ref} className="font-serif text-5xl">{v.toLocaleString()}+</div>
      <p className="text-xs uppercase tracking-widest text-mut mt-2">{label}</p>
    </Rv>
  );
}