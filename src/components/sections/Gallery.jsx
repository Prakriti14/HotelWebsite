import Heading from "../ui/Heading";
import Pic from "../ui/Pic";

const extras = [
  "lobby1", "balcony", "lobby2", "bar", "lobby3", "corridors",
  "lakeview", "lobby4", "dining", "parkarea", "lobby5",
];

const strip = (keys) =>
  [...keys, ...keys].map((k, i) => (
    <div key={i} className="pic w-72 h-48 shrink-0"><Pic k={k} /></div>
  ));

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 overflow-hidden bg-card">
      <Heading eyebrowText="Gallery" title="Moments at Aurelia" />
      <div className="space-y-4">
        <div className="mq">{strip(extras)}</div>
        <div className="mq r">{strip([...extras].reverse())}</div>
      </div>
    </section>
  );
}