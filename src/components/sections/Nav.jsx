import { useEffect, useState } from "react";

const links = [["Rooms", "rooms"], ["Wellness", "wellness"], ["Dining", "dining"], ["Gallery", "gallery"], ["Reserve", "book"]];

export default function Nav() {
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const f = () => setSc(window.scrollY > 60);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${sc ? "bg-bg/90 backdrop-blur border-b border-line text-fg" : "text-black font-semibold"}`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#home" className="font-serif font-bold text-2xl tracking-wide">Aurelia Grand</a>
        <nav className="hidden md:flex gap-9 text-xs tracking-[.15em] uppercase">
          {links.map(([l, id]) => <a key={id} href={`#${id}`} className="lk">{l}</a>)}
        </nav>
      </div>
    </header>
  );
}