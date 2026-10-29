import { useState } from "react";
import Heading from "../ui/Heading";
import Tabs from "../ui/Tabs";
import Rv from "../ui/Rv";
import Pic from "../ui/Pic";
import { ROOMS, fmt } from "../../data";

const types = ["All", "Standard", "Deluxe", "Suite", "Villa"];

export default function Rooms({ onBook }) {
  const [f, setF] = useState("All");
  return (
    <section id="rooms" className="py-28 max-w-7xl mx-auto px-6">
      <Heading eyebrowText="Accommodation" title="Rooms & Suites" />
      <Tabs items={types} value={f} onChange={setF} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {ROOMS.filter((r) => f === "All" || r.t === f).map((r, i) => (
          <Rv key={r.id} d={i * 90}>
            <div className="pic aspect-[4/3]">
              <Pic k={r.k} i={0} />
              <span className="absolute top-4 left-4 bg-bg/90 text-fg text-[11px] tracking-widest uppercase px-3 py-1">{r.sz} m² · {r.g} guests</span>
            </div>
            <div className="pt-6">
              <h3 className="font-serif text-3xl">{r.n}</h3>
              <p className="text-mut text-sm mt-2">{r.d}</p>
              <p className="text-xs text-mut mt-3 tracking-wide">{r.f.join(" · ")}</p>
              <div className="flex items-end justify-between mt-6 pt-5 border-t border-line">
                <div><span className="font-serif text-3xl">{fmt(r.p)}</span><span className="text-xs text-mut"> / night</span></div>
                <button onClick={() => onBook(r.id)} className="btn !py-2 !px-5">Book</button>
              </div>
            </div>
          </Rv>
        ))}
      </div>
    </section>
  );
}