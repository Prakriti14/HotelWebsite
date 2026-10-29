import { useState } from "react";
import Nav from "./components/sections/Nav";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Rooms from "./components/sections/Rooms";
import Wellness from "./components/sections/Wellness";
import Dining from "./components/sections/Dining";
import Gallery from "./components/sections/Gallery";
import Reviews from "./components/sections/Reviews";
import Booking, { blank } from "./components/sections/Booking";
import Footer from "./components/sections/Footer";

export default function App() {
  const [form, setForm] = useState(blank);
  const goBook = (patch) => {
    setForm((f) => ({ ...f, ...patch }));
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Nav />
      <Hero onCheck={(q) => goBook({ ci: q.ci, co: q.co, room: q.room, adults: Number(q.guests) })} />
      <Stats />
      <Rooms onBook={(id) => goBook({ room: id })} />
      <Wellness />
      <Dining />
      <Gallery />
      <Reviews />
      <Booking form={form} setForm={setForm} />
      <Footer />
    </>
  );
}