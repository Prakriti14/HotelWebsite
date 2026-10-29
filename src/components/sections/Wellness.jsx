import Heading from "../ui/Heading";
import Rv from "../ui/Rv";
import Pic from "../ui/Pic";
import { AMENITIES } from "../../data";
import { eyebrow } from "../../lib/utils";

export default function Wellness() {
  return (
    <section id="wellness" className="py-28 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <Heading eyebrowText="Wellness & leisure" title="Restore, move, unwind" />
        <div className="space-y-24 mt-20">
          {AMENITIES.map(([k, t, d], i) => (
            <div key={t} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <Rv className={i % 2 ? "md:order-2" : ""}>
                <div className="pic aspect-[4/3]"><Pic k={k} i={0} /></div>
              </Rv>
              <Rv d={150}>
                <p className={eyebrow}>0{i + 1}</p>
                <h3 className="font-serif text-4xl mt-2">{t}</h3>
                <p className="text-mut mt-4 max-w-md">{d}</p>
              </Rv>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}