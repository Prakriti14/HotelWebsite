import Heading from "../ui/Heading";
import Rv from "../ui/Rv";
import { REVIEWS } from "../../data";

export default function Reviews() {
  return (
    <section className="py-28 max-w-6xl mx-auto px-6">
      <Heading eyebrowText="Guest reviews" title="In their words" />
      <div className="grid md:grid-cols-3 gap-10">
        {REVIEWS.map(([n, c, t], i) => (
          <Rv key={n} d={i * 120} className="border-t border-acc pt-6">
            <p className="font-serif text-2xl leading-snug">“{t}”</p>
            <p className="mt-5 text-xs tracking-widest uppercase text-mut">{n} · {c}</p>
          </Rv>
        ))}
      </div>
    </section>
  );
}