import { useState } from "react";
import { ROOMS } from "../../data";
import { iso, addDays } from "../../lib/utils";

const HERO_IMG = "/hotel1.webp"; 
const glow = "[text-shadow:0_0_18px_rgba(255,255,255,.95),0_0_4px_rgba(255,255,255,.9)]";

export default function Hero({ onCheck }) {
  const [q, setQ] = useState({ ci: iso(addDays(1)), co: iso(addDays(3)), guests: 2, room: ROOMS[0].id });
  const set = (k) => (e) => setQ({ ...q, [k]: e.target.value });
  return (
    <section id="home" className="relative h-screen min-h-[720px] text-black overflow-hidden">
      <div className="pic kb !absolute inset-0">
        <img src={HERO_IMG} alt="Aurelia Grand" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-white/40" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pb-64 md:pb-24">
        <p className={`text-xs tracking-[.4em] uppercase font-semibold ${glow}`}>Five-star hotel · Spa · Dining</p>
        <h1 className={`font-serif font-bold text-5xl sm:text-7xl md:text-8xl mt-5 leading-[1.05] ${glow}`}>Quiet luxury,<br />by the lake</h1>
        <p className={`mt-6 max-w-xl font-medium text-neutral-900 ${glow}`}>180 rooms and suites, a rooftop pool, a full wellness spa and a kitchen that travels the world.</p>
        <a href="#book" className="btn mt-10 !bg-neutral-900 !text-white !border-neutral-900 hover:!bg-acc hover:!border-acc">Reserve a stay</a>
      </div>
      <form
        onSubmit={(e) => { e.preventDefault(); onCheck(q); }}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-end absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-[min(980px,92%)] bg-white/95 text-neutral-900 shadow-xl px-5 md:px-8 py-5 text-xs font-medium uppercase tracking-widest [color-scheme:light] [&_.inp]:text-neutral-900 [&_.inp]:border-neutral-300 [&_.inp]:font-normal [&_.inp_option]:bg-white [&_.inp_option]:text-neutral-900"
      >
        <label>Check-in<input type="date" min={iso(new Date())} value={q.ci} onChange={set("ci")} className="inp" /></label>
        <label>Check-out<input type="date" min={q.ci} value={q.co} onChange={set("co")} className="inp" /></label>
        <label>Guests<select value={q.guests} onChange={set("guests")} className="inp">{[1, 2, 3, 4, 5].map((n) => <option key={n}>{n}</option>)}</select></label>
        <label>Room<select value={q.room} onChange={set("room")} className="inp">{ROOMS.map((r) => <option key={r.id} value={r.id}>{r.n}</option>)}</select></label>
        <button className="btn s col-span-2 md:col-span-1 !bg-neutral-900 !text-white hover:!bg-acc">Check</button>
      </form>
    </section>
  );
}