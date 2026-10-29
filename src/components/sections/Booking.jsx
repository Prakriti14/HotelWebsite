import { useMemo, useState } from "react";
import Heading from "../ui/Heading";
import Rv from "../ui/Rv";
import Pic from "../ui/Pic";
import { ADDONS, ROOMS, fmt } from "../../data";
import { eyebrow, iso, addDays } from "../../lib/utils";

export const blank = {
  name: "", email: "", phone: "", nation: "",
  ci: iso(addDays(1)), co: iso(addDays(3)),
  room: ROOMS[0].id, rooms: 1, adults: 2, children: 0,
  arrival: "14:00", bed: "No preference", notes: "", addons: [],
};

export default function Booking({ form, setForm }) {
  const [err, setErr] = useState("");
  const [done, setDone] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const num = (k) => (e) => setForm((f) => ({ ...f, [k]: Number(e.target.value) }));

  const calc = useMemo(() => {
    const r = ROOMS.find((x) => x.id === form.room);
    const n = Math.max(0, Math.round((new Date(form.co) - new Date(form.ci)) / 864e5));
    const base = r.p * n * (form.rooms || 1);
    const items = ADDONS.filter((a) => form.addons.includes(a.id)).map((a) => [a.n, a.perNight ? a.p * n : a.p]);
    const sub = base + items.reduce((s, i) => s + i[1], 0);
    const tax = Math.round(sub * 0.12);
    return { r, n, base, items, tax, total: sub + tax };
  }, [form]);

  const toggle = (id) =>
    setForm((f) => ({ ...f, addons: f.addons.includes(id) ? f.addons.filter((x) => x !== id) : [...f.addons, id] }));

  const onCi = (e) => {
    const ci = e.target.value, min = iso(new Date(+new Date(ci) + 864e5));
    setForm((f) => ({ ...f, ci, co: f.co <= ci ? min : f.co }));
  };

  const submit = (e) => {
    e.preventDefault();
    let m = "";
    if (!form.name.trim()) m = "Please enter your name.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) m = "Please enter a valid email.";
    else if (form.phone.trim().length < 6) m = "Please enter a valid phone number.";
    else if (calc.n < 1) m = "Check-out must be after check-in.";
    else if (form.adults + form.children > calc.r.g * form.rooms) m = `This room fits ${calc.r.g} guests. Add rooms or choose a larger room.`;
    setErr(m);
    if (!m) setDone({ ...calc, form, code: "AG-" + Math.random().toString(36).slice(2, 8).toUpperCase() });
  };

  const L = "text-xs uppercase tracking-widest text-mut";
  const I = "inp normal-case tracking-normal text-base";

  return (
    <section id="book" className="py-28 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <Heading eyebrowText="Reservation" title="Book your stay" />
        <Rv>
          <form onSubmit={submit} noValidate className="grid lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-6">
              <label className={L}>Full name *<input className={I} value={form.name} onChange={set("name")} placeholder="Your name" /></label>
              <label className={L}>Email *<input type="email" className={I} value={form.email} onChange={set("email")} placeholder="you@email.com" /></label>
              <label className={L}>Phone *<input type="tel" className={I} value={form.phone} onChange={set("phone")} placeholder="+977 98…" /></label>
              <label className={L}>Nationality<input className={I} value={form.nation} onChange={set("nation")} placeholder="Country" /></label>
              <label className={L}>Check-in *<input type="date" min={iso(new Date())} className={I} value={form.ci} onChange={onCi} /></label>
              <label className={L}>Check-out *<input type="date" min={form.ci} className={I} value={form.co} onChange={set("co")} /></label>
              <label className={L}>Room type<select className={I} value={form.room} onChange={set("room")}>{ROOMS.map((r) => <option key={r.id} value={r.id}>{r.n} — {fmt(r.p)}</option>)}</select></label>
              <label className={L}>Rooms<input type="number" min="1" max="5" className={I} value={form.rooms} onChange={num("rooms")} /></label>
              <label className={L}>Adults<input type="number" min="1" max="6" className={I} value={form.adults} onChange={num("adults")} /></label>
              <label className={L}>Children<input type="number" min="0" max="4" className={I} value={form.children} onChange={num("children")} /></label>
              <label className={L}>Arrival time<input type="time" className={I} value={form.arrival} onChange={set("arrival")} /></label>
              <label className={L}>Bed preference<select className={I} value={form.bed} onChange={set("bed")}><option>No preference</option><option>King bed</option><option>Twin beds</option></select></label>
              <fieldset className="sm:col-span-2 grid sm:grid-cols-2 gap-3 text-sm">
                <legend className={`${L} mb-3`}>Add-ons</legend>
                {ADDONS.map((a) => (
                  <label key={a.id} className="flex gap-2 items-center">
                    <input type="checkbox" className="accent-[#9a7b4f]" checked={form.addons.includes(a.id)} onChange={() => toggle(a.id)} />{a.label}
                  </label>
                ))}
              </fieldset>
              <label className={`${L} sm:col-span-2`}>Special requests<textarea rows="3" className={I} value={form.notes} onChange={set("notes")} placeholder="Anniversary, late check-out, dietary needs…" /></label>
              {err && <p className="sm:col-span-2 text-red-500 text-sm">{err}</p>}
            </div>

            <aside className="border border-line p-8 h-fit lg:sticky lg:top-28 bg-bg">
              <h3 className="font-serif text-3xl mb-5">Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="pic aspect-[16/9] mb-4"><Pic k={calc.r.k} i={3} /></div>
                <p className="font-serif text-2xl">{calc.r.n}</p>
                <div className="flex justify-between text-mut"><span>{fmt(calc.r.p)} × {calc.n} night(s) × {form.rooms} room(s)</span><span>{fmt(calc.base)}</span></div>
                {calc.items.map(([n, p]) => <div key={n} className="flex justify-between text-mut"><span>{n}</span><span>{fmt(p)}</span></div>)}
                <div className="flex justify-between text-mut"><span>Taxes & fees (12%)</span><span>{fmt(calc.tax)}</span></div>
                <div className="flex justify-between border-t border-line pt-4 mt-2 font-serif text-3xl"><span>Total</span><span>{fmt(calc.total)}</span></div>
              </div>
              <button className="btn s w-full mt-8">Confirm booking</button>
              <p className="text-xs text-mut mt-4 text-center">Free cancellation up to 48 hours before arrival.</p>
            </aside>
          </form>
        </Rv>
      </div>

      {done && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-bg text-fg max-w-md w-full p-10 text-center border border-line">
            <p className={eyebrow}>Confirmed</p>
            <h3 className="font-serif text-4xl mt-2">Thank you</h3>
            <div className="text-sm text-mut mt-5 space-y-1">
              <p>{done.form.name}, your stay is booked.</p>
              <p>{done.r.n} × {done.form.rooms} · {done.n} night(s)</p>
              <p>{done.form.ci} → {done.form.co}</p>
              <p className="font-serif text-3xl text-fg mt-3">{fmt(done.total)}</p>
              <p className="mt-3 text-xs tracking-widest uppercase">Code {done.code}</p>
            </div>
            <button className="btn s mt-8" onClick={() => setDone(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}