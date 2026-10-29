import { useState } from "react";
import Heading from "../ui/Heading";
import Tabs from "../ui/Tabs";
import Rv from "../ui/Rv";
import Pic from "../ui/Pic";
import { MENU, fmt } from "../../data";

const FOOD_KEYS = {
  Indian: "food1",
  Chinese: "food2",
  Continental: "food3",
  "Thai & Asian": "food4",
  "Desserts & Drinks": "food5",
  Italian: "food6",
};

export default function Dining() {
  const cats = Object.keys(MENU);
  const [c, setC] = useState(cats[0]);
  return (
    <section id="dining" className="py-28 max-w-6xl mx-auto px-6">
      <Heading eyebrowText="Multi-cuisine dining" title="A world on the table" sub="6:30 AM – 11:30 PM · Room service 24 hours" />
      <Tabs items={cats} value={c} onChange={setC} />
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <Rv className="md:col-span-2 md:sticky md:top-28">
          <div className="pic aspect-[4/5]"><Pic k={FOOD_KEYS[c]} i={0} /></div>
        </Rv>
        <div className="md:col-span-3 divide-y divide-line">
          {MENU[c].map(([n, d, p, veg]) => (
            <div key={n} className="py-6 flex justify-between gap-6">
              <div>
                <h4 className="font-serif text-2xl">
                  {n} <span className={`text-[10px] tracking-widest uppercase align-middle ${veg ? "text-green-600" : "text-red-500"}`}>{veg ? "Veg" : "Non-veg"}</span>
                </h4>
                <p className="text-sm text-mut mt-1">{d}</p>
              </div>
              <span className="font-serif text-2xl text-acc">{fmt(p)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}